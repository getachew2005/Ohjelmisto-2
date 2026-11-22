from flask import Flask, jsonify
import json
import os

app = Flask(__name__)

dictionary_path = os.path.join(
    os.path.dirname(__file__),
    "Flask-kotitehtävä2.json"
)

with open(dictionary_path, "r", encoding="utf-8") as file:
    dictionary = json.load(file)

dictionary = {
    word.lower(): translation
    for word, translation in dictionary.items()
}


@app.route('/translate/<string:word>')
def translate(word):
    word = word.lower()

    if word in dictionary:
        return jsonify({
            "English": word,
            "Finnish": dictionary[word]
        })

    return jsonify({
        "error": "Word not found"
    }), 404


@app.route('/words')
def words():
    return jsonify(list(dictionary.keys()))


if __name__ == '__main__':
    app.run(port=3000)