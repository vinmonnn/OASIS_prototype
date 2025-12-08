from flask import Flask
from .config import Config
from .extensions import db, migrate, jwt, cors, limiter, mail

def create_app():
    app = Flask(__name__, static_folder=None)
    app.config.from_object(Config)

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)
    cors.init_app(app)
    limiter.init_app(app)
    mail.init_app(app)

    from .blueprints.auth import auth_bp
    from .blueprints.hte import hte_bp
    from .blueprints.reviews import reviews_bp
    from .blueprints.chat import chat_bp

    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(hte_bp, url_prefix="/api/htes")
    app.register_blueprint(reviews_bp, url_prefix="/api/reviews")
    app.register_blueprint(chat_bp, url_prefix="/chat")

    @app.get("/")
    def index():
        return {"message": "OASIS API running"}

    return app
