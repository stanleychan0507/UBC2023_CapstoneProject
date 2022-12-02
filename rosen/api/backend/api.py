import os
from flask import Flask, request
from flask_cors import CORS


api = Flask(__name__)
cors = CORS(api)

UPLOAD_PHOTOS = '../photos'
UPLOAD_VIDEOS = '../videos'
api.config['UPLOAD_PHOTOS'] = UPLOAD_PHOTOS
api.config['UPLOAD_VIDEOS'] = UPLOAD_VIDEOS

@api.route('/')
def index():
    return {"greetings":"hello world"}


@api.route('/api/upload', methods=['GET','POST'])
def upload():
    if request.method == 'POST':
        photo = request.form.get['photo']
        #video = request.form.get('video')
        #photo.save(os.path.join(api.config['UPLOAD_PHOTOS'],'download.jpg'))
        #video.save(os.path.join(api.config['UPLOAD_PHOTOS'],'download.jpg'))
        return "server has received files"

if __name__ == "__main__":
    api.run(debug=True)
