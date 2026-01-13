from flask import Blueprint, request, jsonify, current_app
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from sqlalchemy import desc
import secrets
from datetime import datetime

from ..extensions import db
from ..models.user import User
from ..models.otp import OTPCode

auth_bp = Blueprint("auth", __name__)

# -----------------------
# Helpers
# -----------------------
def json_error(msg: str, code: int):
    return jsonify({"error": msg}), code

def normalize_email(email: str) -> str:
    return (email or "").strip().lower()

def generate_otp_code() -> str:
    return f"{secrets.randbelow(1000000):06d}"

# -----------------------
# OTP endpoints
# -----------------------
@auth_bp.post("/student/send-otp")
def student_send_otp():
    data = request.get_json() or {}
    email = normalize_email(data.get("email"))

    if not email:
        return json_error("Email is required.", 400)

    code = generate_otp_code()
    otp = OTPCode(email=email, code=code, expires_at=OTPCode.expiry(minutes=10))
    db.session.add(otp)
    db.session.commit()

    # If SMTP configured, send email; otherwise dev-mode return OTP
    if current_app.config.get("SMTP_USERNAME"):
        # Minimal SMTP sender; optional. If you want this, add a proper email service.
        # For now, return success to avoid blocking.
        return jsonify({"message": "OTP generated and (SMTP configured) would be sent."}), 200

    return jsonify({"message": "OTP generated (dev)", "otp": code}), 200

@auth_bp.post("/student/verify-otp")
def student_verify_otp():
    data = request.get_json() or {}
    email = normalize_email(data.get("email"))
    code = (data.get("otp") or "").strip()

    if not email or not code:
        return json_error("Email and OTP are required.", 400)

    otp = (
        OTPCode.query
        .filter_by(email=email, code=code)
        .order_by(desc(OTPCode.created_at))
        .first()
    )

    if not otp:
        return json_error("Invalid OTP.", 400)
    if otp.used_at is not None:
        return json_error("OTP already used.", 400)
    if otp.expires_at < datetime.utcnow():
        return json_error("OTP expired.", 400)

    otp.used_at = datetime.utcnow()
    db.session.commit()
    return jsonify({"message": "OTP verified"}), 200

# -----------------------
# Student auth
# -----------------------
@auth_bp.post("/student/register")
def student_register():
    data = request.get_json() or {}
    email = normalize_email(data.get("email"))
    password = data.get("password") or ""

    if not email or not password:
        return json_error("Email and password are required.", 400)

    if User.query.filter_by(email=email).first():
        return json_error("Email already registered.", 409)

<<<<<<< HEAD
    hashed_password = hash_password(password)
    new_user = User(email=email, password_hash=hashed_password, role="student", is_verified=False)
    db.session.add(new_user)
    db.session.commit() 
=======
    # Enforce OTP verification: must have a recent used OTP
    used_otp = (
        OTPCode.query
        .filter_by(email=email)
        .filter(OTPCode.used_at.isnot(None))
        .order_by(desc(OTPCode.used_at))
        .first()
    )
    if not used_otp:
        return json_error("OTP verification required before registering.", 403)

    user = User(email=email, role="student", is_verified=True)
    user.set_password(password)

    db.session.add(user)
    db.session.commit()
>>>>>>> f284818d8742a493500277b90032358ffe394f45

    token = create_access_token(identity={"id": user.id, "role": user.role})
    return jsonify({"token": token, "role": user.role}), 201

@auth_bp.post("/student/login")
def student_login():
    data = request.get_json() or {}
    email = normalize_email(data.get("email"))
    password = data.get("password") or ""

    user = User.query.filter_by(email=email, role="student").first()
    if not user or not user.check_password(password):
        return json_error("Invalid credentials.", 401)
    if not user.is_active:
        return json_error("Account disabled.", 403)

    token = create_access_token(identity={"id": user.id, "role": user.role})
    return jsonify({"token": token, "role": user.role}), 200

# -----------------------
# Admin auth
# -----------------------
@auth_bp.post("/admin/login")
def admin_login():
    data = request.get_json() or {}
    email = normalize_email(data.get("email"))
    password = data.get("password") or ""

    user = User.query.filter_by(email=email, role="admin").first()
    if not user or not user.check_password(password):
        return json_error("Invalid credentials.", 401)
    if not user.is_active:
        return json_error("Account disabled.", 403)

    token = create_access_token(identity={"id": user.id, "role": user.role})
    return jsonify({"token": token, "role": user.role}), 200

# -----------------------
# Session endpoint
# -----------------------
@auth_bp.get("/me")
@jwt_required()
def me():
    ident = get_jwt_identity()
    user = User.query.get(ident["id"])
    if not user:
        return json_error("User not found.", 404)

    return jsonify({
        "id": user.id,
        "email": user.email,
        "role": user.role,
        "is_verified": user.is_verified
    }), 200
