from flask import Blueprint, render_template
from datetime import datetime

main = Blueprint('main', __name__)

@main.app_context_processor
def inject_now():
    return {'current_year': datetime.now().year}

@main.route('/')
def home():
    return render_template('index.html')
