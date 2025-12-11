from .extensions import db
from datetime import datetime, timedelta
from passlib.hash import bcrypt

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120))
    last_name = db.Column(db.String(120))
    email = db.Column(db.String(255), unique=True, index=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=True)
    role = db.Column(db.String(50), default="user")  # user, admin, superadmin
    verified = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self, raw):
        self.password_hash = bcrypt.hash(raw)

    def check_password(self, raw):
        return bcrypt.verify(raw, self.password_hash)

class OTP(db.Model):
    __tablename__ = "otps"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), index=True, nullable=False)
    otp_hash = db.Column(db.String(255), nullable=False)
    expires_at = db.Column(db.DateTime, nullable=False)
    attempts = db.Column(db.Integer, default=0)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class HTE(db.Model):
    __tablename__ = "htes"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, index=True)
    address = db.Column(db.String(500))
    industry = db.Column(db.String(200))
    contact_person = db.Column(db.String(200))
    contact_email = db.Column(db.String(200))
    contact_number = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    # optionally add is_archived boolean

class MOAProspect(db.Model):
    __tablename__ = "moa_prospects"
    id = db.Column(db.Integer, primary_key=True)
    company_name = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(500))
    industry = db.Column(db.String(200))
    primary_contact = db.Column(db.String(200))
    role = db.Column(db.String(100))
    email = db.Column(db.String(200))
    phone = db.Column(db.String(50))
    submitted_by = db.Column(db.Integer, db.ForeignKey("users.id"))
    status = db.Column(db.String(50), default="submitted")  # submitted, approved, rejected
    reason = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Review(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    hte_id = db.Column(db.Integer, db.ForeignKey("htes.id"))
    rating = db.Column(db.Integer)
    title = db.Column(db.String(255))
    body = db.Column(db.Text)
    status = db.Column(db.String(50), default="pending")  # pending, approved, rejected
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class ChatbotFAQ(db.Model):
    __tablename__ = "chatbot_faq"
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(1000))
    answer = db.Column(db.Text)
    tags = db.Column(db.String(500))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)