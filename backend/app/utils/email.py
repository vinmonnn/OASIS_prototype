from flask_mail import Mail, Message

mail = Mail()

def send_otp_email(app, recipient_email, otp):
    mail.init_app(app)
    msg = Message(
        subject="OASIS OTP Verification",
        sender=app.config.get("MAIL_USERNAME"),
        recipients=[recipient_email],
        body=f"Your OASIS verification OTP is: {otp}"
    )
    with app.app_context():
        mail.send(msg)
