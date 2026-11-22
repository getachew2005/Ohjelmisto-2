from flask import Flask, request
import json
import os

app = Flask(__name__)

@app.route("/add")
def add_word():
    en = request.args.get("en")
    fi = request.args.get("fi")

    if not en or not fi:
        return "Anna sekä englanninkielinen sana että suomennos!", 400

    if os.path.exists("Flask-kotitehtävä3.json"):
        with open("Flask-kotitehtävä3.json", "r", encoding="utf-8") as file:
            dictionary = json.load(file)
    else:
        dictionary = {}

    dictionary[en] = fi

    with open("Flask-kotitehtävä3.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=4)

    return f"Sana '{en}' lisätty sanakirjaan!"

if __name__ == "__main__":
    app.run(port=3000, debug=True)
