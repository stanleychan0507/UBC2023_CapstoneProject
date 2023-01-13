import os
from flask import Flask, request
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app)

UPLOAD_PHOTOS = './photos'
UPLOAD_VIDEOS = './videos'
app.config['UPLOAD_PHOTOS'] = UPLOAD_PHOTOS
app.config['UPLOAD_VIDEOS'] = UPLOAD_VIDEOS

@app.route('/')
def index():
    return {"greetings":"hello world"}


@app.route('/api/upload', methods=['GET','POST'])
def upload():
    if request.method == 'POST':
        photo = request.files['photo']
        video = request.files['video']
        photo.save(os.path.join(api.config['UPLOAD_PHOTOS'],photo.filename))
        video.save(os.path.join(api.config['UPLOAD_VIDEOS'],video.filename))
        return "Image has been successfully uploaded"

if __name__ == "__main__":
    app.run(debug=True)
