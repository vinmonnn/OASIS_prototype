import os

def _normalize_database_url(url: str | None) -> str | None:
    if not url:
        return None
    # Some providers use postgres:// which SQLAlchemy may reject; normalize it.
    if url.startswith("postgres://"):
        return url.replace("postgres://", "postgresql://", 1)
    return url

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "dev-jwt-secret")

    # Prefer DATABASE_URL, but allow SQLALCHEMY_DATABASE_URI too
    SQLALCHEMY_DATABASE_URI = _normalize_database_url(
        os.getenv("DATABASE_URL") or os.getenv("SQLALCHEMY_DATABASE_URI")
    )
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    OTP_DEV_PRINT = os.getenv("OTP_DEV_PRINT", "1") == "1"

    # 1 hour
    JWT_ACCESS_TOKEN_EXPIRES = 60 * 60