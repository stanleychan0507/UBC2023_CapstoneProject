from flask import Flask
from flask_cors import CORS,cross_origin
api = Flask(__name__)
cors = CORS(api)
api.config["CORS_HEADERS"] = "Content-Type"

@api.route('/')
def index():
    return ("Hello World")

if __name__ == "__main__":
    api.run(debug=True,host="0.0.0.0")
