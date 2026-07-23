from flask import Blueprint, render_template

main = Blueprint('main', __name__)

@main.route('/game')
def Game():
    page_title = "Game"
    return render_template("main/Game.html", title=page_title)

@main.route('/')
def home():
    page_title = "Simplest Game Possible"
    return render_template("main/Home_Page.html", title=page_title)

@main.route('/how-to')
def how_to():
    page_title = "How to"
    return render_template("main/how_to.html", title=page_title)

@main.route('/credits')
def credits():
    page_title = "Credits"
    return render_template("main/credits.html", title=page_title)

@main.route('/Review')
def review():
    page_title = "Review"
    return render_template("main/review.html", title=page_title)