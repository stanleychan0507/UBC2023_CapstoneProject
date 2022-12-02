import os
from flask import Flask, request
from flask_cors import CORS


api = Flask(__name__)
cors = CORS(api)

UPLOAD_PHOTOS = './photos'
UPLOAD_VIDEOS = './videos'
api.config['UPLOAD_PHOTOS'] = UPLOAD_PHOTOS
api.config['UPLOAD_VIDEOS'] = UPLOAD_VIDEOS

@api.route('/')
def index():
    return {"greetings":"hello world"}


@api.route('/api/upload', methods=['GET','POST'])
def upload():
    if request.method == 'POST':
        photo = request.files['photo']
        video = request.files['video']
        photo.save(os.path.join(api.config['UPLOAD_PHOTOS'],photo.filename))
        video.save(os.path.join(api.config['UPLOAD_VIDEOS'],video.filename))
        return "Image has been successfully uploaded"

if __name__ == "__main__":
    api.run(debug=True)
