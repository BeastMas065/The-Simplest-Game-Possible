from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/')
@main.route('/Home')
def home():
    page_title = "Simplest Game Possible"
    return render_template("main/Home_Page.html", title=page_title)

@main.route("/Game")
def game():
    page_title = "Simplest Game Possible"
    return render_template("main/game.html", title=page_title)