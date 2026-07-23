The Simplest Game

This is a two-player game developed with Flask. There is no database. There is no bloat. Each player takes turns to add an X or an O to a string, and a state win-condition check is performed. State is managed with Sessions.

This is local multiplayer only. The only players are those sitting at the device. Players will use the same browser and take turns when playing. This is not a networked game (yet).

    🚧 Status: In production

    🔭 Future plan: Online, session based, inter-device, and multiplayer is planned.

Purpose

There is no end goal of copy-and-modify this project as a tutorial, because there are no tutorials in existence. This is helping me learn Flask outside of the classroom.

    Building a Flask app and using the application factory pattern + Blueprints, as opposed to a giant app.py

    Writing a win-check in Python for the first time without using someone else's code or using a library

    Writing all CSS from scratch (dropped Pico.css). This is now the first time I can control the front end without using a framework I can fall back on.

    Keeping the scope tight. This is an active problem I face in this project.

Components

    Backend: Python, Flask (application factory + Blueprints)

    Handling state: Flask's built in session (no database)

    Frontend: HTML, hand written, no framework CSS

    Hosting/local server: Flask's dev server for now
## Features

- Two-player turn-based game play — **local (on the same machine), not over the network**
- Shared state for the string, alternating X/O moves by player
- Custom win condition checking (Python code)
- Routes: Home, Play, How to, Credits
- Custom-styled user interface (no CSS framework used)

---

## Running Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/BeastMas065/The-Simplest-Game-Possible.git
   cd The-Simplest-Game-Possible.git
   ```

2. **Set up a virtual environment**
   ```bash
   python -m venv venv
   venv\Scripts\activate        # For Windows
   source venv/bin/activate     # For macOS/Linux
   ```

3. **Install the dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**
   ```bash
   run run.py file
   ```

5. Go to `http://127.0.0.1:5000` in your browser.

---

## Additional Information

This is a learn-by-doing project, so the idea is to produce a fully clean and deployable product, understanding everything about
