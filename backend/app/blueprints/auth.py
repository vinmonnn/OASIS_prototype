from flask import Blueprint, request, jsonify, current_app
from ..extensions import db
from ..models import User, OTP
from itsdangerous import URLSafeTimedSerializer
from datetime import datetime, timedelta
from passlib.hash import bcrypt
import random
from ..extensions import mail
from flask_mail import Message
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, set_refresh_cookies, unset_jwt_cookies

auth_bp = Blueprint("auth", __name__)

def send_email(subject, recipients, body):
    # Simple wrapper
    msg = Message(subject=subject, recipients=[recipients], body=body)
    mail.send(msg)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json() or {}
    email = data.get("email")
    fname = data.get("first_name","")
    lname = data.get("last_name","")
    if not email or not email.endswith("@pup.edu.ph"):  # adjust domain
        return jsonify({"msg":"Please use your official PUP webmail"}), 400
    existing = User.query.filter_by(email=email).first()
    if existing:
        return jsonify({"msg":"Email already registered"}), 400

    # Create OTP and send
    otp_plain = f"{random.randint(100000,999999)}"
    otp_hash = bcrypt.hash(otp_plain)
    expires = datetime.utcnow() + timedelta(minutes=5)
    otp = OTP(email=email, otp_hash=otp_hash, expires_at=expires)
    db.session.add(otp)
    db.session.commit()

    # send email
    try:
        send_email("OASIS Registration OTP", email, f"Your OTP is: {otp_plain}. Expires in 5 minutes.")
    except Exception as e:
        current_app.logger.error("Mail send failed: %s", e)

    return jsonify({"msg":"OTP sent to email"}), 200

@auth_bp.route("/verify-otp", methods=["POST"])
def verify_otp():
    data = request.get_json() or {}
    email = data.get("email")
    otp_input = data.get("otp")
    password = data.get("password")
    if not (email and otp_input and password):
        return jsonify({"msg":"missing fields"}), 400

    record = OTP.query.filter_by(email=email).order_by(OTP.created_at.desc()).first()
    if not record:
        return jsonify({"msg":"No OTP found"}), 400
    if record.attempts >= 3:
        return jsonify({"msg":"Too many attempts"}), 400
    if datetime.utcnow() > record.expires_at:
        return jsonify({"msg":"OTP expired"}), 400

    if not bcrypt.verify(otp_input, record.otp_hash):
        record.attempts += 1
        db.session.commit()
        return jsonify({"msg":"Invalid OTP"}), 400

    # OTP correct — create user
    user = User(email=email, first_name=data.get("first_name",""), last_name=data.get("last_name",""), verified=True)
    user.set_password(password)
    db.session.add(user)
    db.session.commit()
    return jsonify({"msg":"User created"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    email = data.get("email")
    password = data.get("password")
    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify({"msg":"Incorrect or invalid credentials"}), 401
    if not user.verified:
        return jsonify({"msg":"Email is not verified"}), 403

    access = create_access_token(identity={"id":user.id,"email":user.email,"role":user.role})
    refresh = create_refresh_token(identity={"id":user.id,"email":user.email,"role":user.role})
    resp = jsonify({"access_token": access, "user":{"id":user.id,"email":user.email,"role":user.role}})
    # set refresh token cookie
    set_refresh_cookies(resp, refresh)
    return resp, 200

@auth_bp.route("/logout", methods=["POST"])
def logout():
    resp = jsonify({"msg":"logout"})
    unset_jwt_cookies(resp)
    return resp, 200