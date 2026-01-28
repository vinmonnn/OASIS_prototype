from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity

from app.models import HostTrainingEstablishment

student_hte_bp = Blueprint(
    "student_hte",
    __name__,
    url_prefix="/api/student/htes"
)

@student_hte_bp.route("/dashboard", methods=["GET"])
@jwt_required()
def hte_dashboard():
    htes = (
        HostTrainingEstablishment.query
        .order_by(HostTrainingEstablishment.moa_signed_at.desc().nullslast())
        .limit(10)
        .all()
    )

    return jsonify([
        {
            "id": hte.id,
            "company_name": hte.company_name,
            "industry": hte.industry,
            "moa_status": hte.moa_status,
            "moa_signed_at": hte.moa_signed_at.isoformat() if hte.moa_signed_at else None,
            "moa_expiry_date": hte.moa_expiry_date.isoformat() if hte.moa_expiry_date else None,
            "course": hte.course,
        }
        for hte in htes
    ]), 200
