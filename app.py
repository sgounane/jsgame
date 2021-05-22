from flask import Flask, render_template, redirect, request

app=Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/game", methods=["GET","POST"])
def game():
    if request.method=="POST":
        name=request.form["name"]
        return render_template("game.html",name=name)
    return redirect("/")
app.run(debug=True, port=5000)