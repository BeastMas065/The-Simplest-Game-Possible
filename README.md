# The Simplest Game

A simple two-player game built primarily as a **JavaScript practice project**, with Flask used for the backend and session-based state management.

There is no database. There is no unnecessary complexity.

Each player takes turns adding an `X` or an `O` to a shared string, and the game checks the string for its respective win condition.

The project started from a simple question:

> **Can I build a playable game instead of another calculator or to-do list while learning JavaScript?**

## 🎮 Play the Game

**Live:** https://the-simplest-game-possible.vercel.app/Home

## Purpose

The main purpose of this project is to learn by building.

Rather than following a tutorial project step-by-step, I wanted to create something of my own that would force me to use JavaScript in a practical way.

### What I wanted to practice

* Manipulating the DOM with JavaScript
* Handling user interactions and events
* Working with event listeners
* Managing UI state
* Creating and controlling modals
* Dynamically updating elements on the page
* Writing game logic from scratch
* Working with strings and checking patterns
* Connecting frontend interactions with backend state
* Building a complete project instead of isolated JavaScript exercises

This project also gave me an opportunity to practice **HTML and CSS**, with all styling written from scratch rather than relying on a CSS framework.

## 🕹️ How the Game Works

The game is designed for **two players sharing the same device**.

Players take turns adding either `X` or `O` to the shared string.

Each player has a different win condition. The game continuously checks the current string to determine whether a player has satisfied their condition.

There is no fixed board and no predetermined string length.

### Current Version

* 👥 Two-player local multiplayer
* 💻 Same-device gameplay
* 🔤 X/O based string gameplay
* 🧠 Custom win-condition logic
* 🪟 Interactive UI and modals
* 🔄 Session-based game state
* 🚫 No database
* 🚫 No CSS framework

This is **not an online multiplayer game yet**. Both players use the same browser and take turns on the same device.

## 🧩 Technologies

### Frontend

* HTML
* CSS
* **JavaScript**

JavaScript is the primary focus of this project. The frontend handles user interactions, UI updates, modals, game controls, and other interactive behaviour.

### Backend

* Python
* Flask

Flask is used mainly to provide the application structure, routes, and session-based state management.

### State Management

**Flask Sessions**

The game does not use a database. The required game state is stored using Flask's built-in session system.

## 🏗️ Flask Structure

Although JavaScript is the main focus, the project also gave me an opportunity to learn how to structure a Flask application properly.

The backend uses:

* Application Factory Pattern
* Blueprints
* Flask Sessions

Instead of putting everything inside one large `app.py`, the application is separated into appropriate components.

## 🎨 Frontend

The entire interface was designed and styled from scratch.

I initially considered using a CSS framework but decided to remove it so I could understand and control the frontend myself.

This meant working directly with:

* Layout
* Responsive sizing
* Modals
* Animations
* Transitions
* Custom buttons
* Scrollbars
* Hover effects
* Game UI

## 🚧 Current Status

**In production**

The current version is deployed and playable online.

## 🔭 Future Plans

The project is intentionally kept small for now, but there are plans to explore:

* Online multiplayer
* Inter-device gameplay
* Session-based multiplayer
* Network communication
* More game modes
* Further JavaScript improvements

## 💻 Running Locally

### 1. Clone the repository

```bash
git clone https://github.com/BeastMas065/The-Simplest-Game-Possible.git
cd The-Simplest-Game-Possible
```

### 2. Create a virtual environment

```bash
python -m venv venv
```

Activate it:

**Windows**

```bash
venv\Scripts\activate
```

**macOS/Linux**

```bash
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python run.py
```

### 5. Open the game

Go to:

```text
http://127.0.0.1:5000
```

## 📌 Why I Built This

This is a **learn-by-doing project**.

The goal wasn't to build a complex production system. It was to take the JavaScript concepts I had recently learned and push myself to use them in something that actually feels like a complete product.

I wanted to see how far I could go with a simple idea, minimal backend requirements, and JavaScript doing most of the interactive work.

And that's how **The Simplest Game** came together.
