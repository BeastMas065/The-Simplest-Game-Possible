from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
def home():
    page_title = "Simplest Game Possible"
    return render_template("main/Home_Page.html", title=page_title)
