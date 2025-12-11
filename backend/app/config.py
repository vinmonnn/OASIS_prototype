import os
from datetime import timedelta
from dotenv import load_dotenv
load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY","dev-secret")
    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL","postgresql://oasis_user:oasis_password123@localhost:5432/oasis_db")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY","jwt-secret")
    JWT_ACCESS_TOKEN_EXPIRES = timedelta(minutes=15)
    JWT_TOKEN_LOCATION = ["headers","cookies"]
    JWT_COOKIE_SECURE = False  # set True in production with HTTPS
    JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=7)

    MAIL_SERVER = os.getenv("MAIL_SERVER","localhost")
    MAIL_PORT = int(os.getenv("MAIL_PORT","1025"))  
    MAIL_USERNAME = os.getenv("MAIL_USERNAME","")
    MAIL_PASSWORD = os.getenv("MAIL_PASSWORD","")
    MAIL_USE_TLS = False
    MAIL_USE_SSL = False

    RATELIMIT_DEFAULT = "200 per day;50 per hour"