import os
from flask import Flask,request, url_for
from flask_cors import CORS
from imageSplit import split
from dpimgsrch import find_sim
from encode import get_encoded_img 
import json


'''
This is the main branch where we call all the functions we have made 
This branch get the files where all the images where cut up an dwhere the reference photo is and compares it using deepimage search
'''
app = Flask(__name__)
CORS(app)

#Get photos
UPLOAD_PHOTOS = './assets/photos/' #here
UPLOAD_VIDEOS = './assets/videos/'
app.config['UPLOAD_PHOTOS'] = UPLOAD_PHOTOS #here
app.config['UPLOAD_VIDEOS'] = UPLOAD_VIDEOS

#Test function to see if react is working.. will not need in future

#This funcnction is requested from front end. This is where photos are cut up  indexed and similar images are found
@app.route('/app/upload/', methods=['POST'])

def upload():
    if request.method == 'POST':
        #requests files
        photo = request.files['photo'] #here
        video = request.files['video']
        photo.save(os.path.join(app.config['UPLOAD_PHOTOS'],photo.filename)) #here
        video.save(os.path.join(app.config['UPLOAD_VIDEOS'],video.filename))
        #split(UPLOAD_VIDEOS+video.filename)
        response = json.dumps(get_encoded_img("./assets/photos/jeep.jpg"))
        # Enable Access-Control-Allow-Origin
        response.headers.add("Access-Control-Allow-Origin", "*")
        return (response) ; 


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    return response


if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")
