from flask import Flask

api = Flask(__name__)

@api.route('/')

def index():
    return "Hello"

if __name__ == "__main__":
    api.run(debug=True)
