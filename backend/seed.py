from app import create_app
from app.extensions import db
from app.models.user import User

def run():
    app = create_app()
    with app.app_context():
        # Admin
        admin_email = "admin@oasis.edu"
        if not User.query.filter_by(email=admin_email).first():
            admin = User(email=admin_email, role="admin", is_verified=True)
            admin.set_password("Admin@12345")
            db.session.add(admin)

        # Students
        students = [
            ("student1@oasis.edu", "Student@12345"),
            ("student2@oasis.edu", "Student@12345"),
            ("student3@oasis.edu", "Student@12345"),
            ("student4@oasis.edu", "Student@12345"),
            ("student5@oasis.edu", "Student@12345"),
            ("student6@oasis.edu", "Student@12345"),
        ]
        for email, pwd in students:
            if not User.query.filter_by(email=email).first():
                u = User(email=email, role="student", is_verified=True)
                u.set_password(pwd)
                db.session.add(u)

        db.session.commit()
        print("Seed complete.")

if __name__ == "__main__":
    run()
