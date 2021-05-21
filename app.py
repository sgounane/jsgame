from flask import Flask, render_template

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/game", methods=["GET","POST"])
def game():
    return render_template("game.html")
app.run(debug=True, port=5000)