from flask import Blueprint, request, jsonify
from ..models import HTE, MOAProspect, User
from ..extensions import db
from flask_jwt_extended import jwt_required, get_jwt_identity

hte_bp = Blueprint("hte", __name__)

@hte_bp.route("/", methods=["GET"])
def list_htes():
    q = request.args.get("q","")
    industry = request.args.get("industry")
    query = HTE.query
    if q:
        query = query.filter(HTE.name.ilike(f"%{q}%"))
    if industry:
        query = query.filter_by(industry=industry)
    results = query.limit(100).all()
    out = []
    for h in results:
        out.append({"id":h.id,"name":h.name,"industry":h.industry,"address":h.address})
    return jsonify(out)

@hte_bp.route("/<int:hte_id>", methods=["GET"])
def get_hte(hte_id):
    h = HTE.query.get_or_404(hte_id)
    return jsonify({"id":h.id,"name":h.name,"address":h.address,"industry":h.industry})

@hte_bp.route("/prospect", methods=["POST"])
@jwt_required()
def submit_prospect():
    data = request.get_json() or {}
    identity = get_jwt_identity()
    user_id = identity.get("id")
    # minimal validation
    email = data.get("email")
    if not data.get("company_name") or not email:
        return jsonify({"msg":"Missing fields"}), 400
    # duplicate check
    existing = MOAProspect.query.filter_by(company_name=data.get("company_name")).first()
    if existing:
        return jsonify({"msg":"Prospect already submitted"}), 400
    p = MOAProspect(
        company_name = data.get("company_name"),
        address = data.get("address"),
        industry = data.get("industry"),
        primary_contact = data.get("primary_contact"),
        role = data.get("role"),
        email = email,
        phone = data.get("phone"),
        submitted_by = user_id
    )
    db.session.add(p)
    db.session.commit()
    return jsonify({"msg":"Prospect submitted"}), 201

@hte_bp.route("/", methods=["POST"])
@jwt_required()
def create_hte():
    # Only admin
    identity = get_jwt_identity()
    if identity.get("role") not in ("admin","superadmin"):
        return jsonify({"msg":"Access Denied"}), 403
    data = request.get_json() or {}
    h = HTE(
        name = data.get("name"),
        address = data.get("address"),
        industry = data.get("industry"),
        contact_person = data.get("contact_person"),
        contact_email = data.get("contact_email"),
        contact_number = data.get("contact_number"),
    )
    db.session.add(h)
    db.session.commit()
    return jsonify({"msg":"HTE added","id":h.id}), 201