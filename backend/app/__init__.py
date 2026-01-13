from flask import Flask
from dotenv import load_dotenv
load_dotenv()

from .config import Config
from .extensions import init_extensions

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    if not app.config.get("SQLALCHEMY_DATABASE_URI"):
        raise RuntimeError("SQLALCHEMY_DATABASE_URI missing. Check backend/.env DATABASE_URL")

    init_extensions(app)

    from .routes.auth import auth_bp
    from .routes.health import health_bp
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(health_bp, url_prefix="/api")

    return app
