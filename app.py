from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/trends")
def trends():
    data = [
        {"name": "Artificial Intelligence", "growth": 87},
        {"name": "Cloud Computing", "growth": 74},
        {"name": "Cybersecurity", "growth": 68},
        {"name": "Edge Computing", "growth": 55},
        {"name": "Blockchain", "growth": 42},
        {"name": "Quantum Computing", "growth": 38},
        {"name": "AR/VR", "growth": 35},
        {"name": "IoT", "growth": 61},
    ]
    return jsonify(data)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
