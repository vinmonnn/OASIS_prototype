from flask import Blueprint, request, jsonify
from ..models import ChatbotFAQ
from ..extensions import db
from sqlalchemy import func

chat_bp = Blueprint("chat", __name__)

def simple_search(query):
    # basic keyword match; more advanced fuzzy matching can be added later
    q = query.lower()
    faqs = ChatbotFAQ.query.all()
    best = None
    best_score = 0
    for f in faqs:
        score = sum([1 for token in q.split() if token in (f.question + " " + (f.tags or "") + " " + (f.answer or "")).lower()])
        if score > best_score:
            best_score = score
            best = f
    return best

@chat_bp.route("/", methods=["POST"])
def chat():
    data = request.get_json() or {}
    message = data.get("message","")
    if not message:
        return jsonify({"reply":"I didn't understand that. Can you rephrase?"})
    faq = simple_search(message)
    if faq:
        return jsonify({"reply": faq.answer})
    # fallback
    return jsonify({"reply":"I don't have an answer for that yet. Please use 'Request Update'."})