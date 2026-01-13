from flask import Blueprint, request, jsonify
from app.extensions import db
from app.models import User
from app.utils.security import hash_password, check_password
from app.utils.otp import generate_otp
from app.utils.email import send_otp_email
from flask_jwt_extended import create_access_token
from datetime import timedelta

auth_bp = Blueprint("auth", __name__)

otp_store = {}

# ----------------------
# REGISTER STUDENT
# ----------------------
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if User.query.filter_by(email=email).first():
        return jsonify({"msg": "Email already registered"}), 400

    hashed_password = hash_password(password)
    new_user = User(email=email, password_hash=hashed_password, role="student", is_verified=False)
    db.session.add(new_user)
    db.session.commit() 

    otp = generate_otp()
    otp_store[email] = otp 
    send_otp_email(auth_bp, email, otp)

    return jsonify({"msg": "User registered. Check email for OTP."}), 201

# ----------------------
# VERIFY OTP
# ----------------------
@auth_bp.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.get_json()
    email = data.get("email")
    otp_input = data.get("otp")

    if otp_store.get(email) != otp_input:
        return jsonify({"msg": "Invalid OTP"}), 400

    user = User.query.filter_by(email=email).first()
    user.is_verified = True
    db.session.commit()

    otp_store.pop(email)
    return jsonify({"msg": "Email verified successfully"}), 200

# ----------------------
# LOGIN (STUDENT OR ADMIN)
# ----------------------
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")
    admin_mode = data.get("admin_mode", False)

    user = User.query.filter_by(email=email).first()
    if not user:
        return jsonify({"msg": "User not found"}), 404

    if admin_mode and user.role != "admin":
        return jsonify({"msg": "Not an admin"}), 403

    if not check_password(password, user.password_hash):
        return jsonify({"msg": "Incorrect password"}), 401

    if user.role == "student" and not user.is_verified:
        return jsonify({"msg": "Email not verified"}), 403

    token = create_access_token(identity={"id": user.id, "role": user.role}, expires_delta=timedelta(hours=12))
    return jsonify({"msg": "Login successful", "token": token, "role": user.role}), 200

# ----------------------
# FORGOT PASSWORD (STRUCTURE)
# ----------------------
@auth_bp.route("/forgot-password", methods=["POST"])
def forgot_password():
    data = request.get_json()
    email = data.get("email")
    # TODO: Generate OTP link or temporary password
    return jsonify({"msg": "Password reset link sent (feature placeholder)"}), 200

