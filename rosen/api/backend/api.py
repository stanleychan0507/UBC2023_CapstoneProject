from flask import Flask
from flask_cors import CORS,cross_origin
api = Flask(__name__)
cors = CORS(api)
api.config["CORS_HEADERS"] = "Content-Type"
@api.route('/')

def index():
    return {"greetings":"hello peeps"}

if __name__ == "__main__":
    api.run(debug=True)
