from flask import Blueprint, request, jsonify
from ..extensions import db
from ..models import Review
from flask_jwt_extended import jwt_required, get_jwt_identity

reviews_bp = Blueprint("reviews", __name__)

@reviews_bp.route("/", methods=["POST"])
@jwt_required()
def submit_review():
    identity = get_jwt_identity()
    user_id = identity.get("id")
    data = request.get_json() or {}
    hte_id = data.get("hte_id")
    rating = int(data.get("rating",0))
    title = data.get("title","")
    body = data.get("body","")
    # simple check: one review per user per hte
    existing = Review.query.filter_by(user_id=user_id, hte_id=hte_id).first()
    if existing:
        return jsonify({"msg":"You already submitted a review for this HTE"}), 400
    r = Review(user_id=user_id, hte_id=hte_id, rating=rating, title=title, body=body, status="pending")
    db.session.add(r)
    db.session.commit()
    return jsonify({"msg":"Review submitted and awaiting moderation"}), 201

@reviews_bp.route("/moderation", methods=["GET"])
@jwt_required()
def moderation_queue():
    identity = get_jwt_identity()
    if identity.get("role") not in ("admin","superadmin"):
        return jsonify({"msg":"Access Denied"}), 403
    pending = Review.query.filter_by(status="pending").all()
    out = [{"id":p.id,"user_id":p.user_id,"hte_id":p.hte_id,"title":p.title,"body":p.body} for p in pending]
    return jsonify(out)

@reviews_bp.route("/<int:review_id>/approve", methods=["PUT"])
@jwt_required()
def approve_review(review_id):
    identity = get_jwt_identity()
    if identity.get("role") not in ("admin","superadmin"):
        return jsonify({"msg":"Access Denied"}), 403
    r = Review.query.get_or_404(review_id)
    r.status = "approved"
    db.session.commit()
    return jsonify({"msg":"Approved"})