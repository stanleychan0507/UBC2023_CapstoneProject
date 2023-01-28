import os
from flask import Flask,request
from flask_cors import CORS
from imageSplit import split
from dpimgsrch import find_sim


app = Flask(__name__)
CORS(app)


UPLOAD_PHOTOS = './assets/photos/' #here
UPLOAD_VIDEOS = './assets/videos/'
app.config['UPLOAD_PHOTOS'] = UPLOAD_PHOTOS #here
app.config['UPLOAD_VIDEOS'] = UPLOAD_VIDEOS

@app.route('/')
def index():
    return {"greetings":"hello world"}

@app.route('/app/upload/', methods=['POST'])
def upload():
    if request.method == 'POST':
        photo = request.files['photo'] #here
        video = request.files['video']
        photo.save(os.path.join(app.config['UPLOAD_PHOTOS'],photo.filename)) #here
        video.save(os.path.join(app.config['UPLOAD_VIDEOS'],video.filename))
        split(UPLOAD_VIDEOS+video.filename)
       
        return ({"hello":find_sim() }) ; 
        


if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")
