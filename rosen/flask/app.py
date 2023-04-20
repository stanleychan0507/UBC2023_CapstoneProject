import os
import base64
import shutil
import re

from flask import Flask, request
from flask_cors import CORS

from imageSplit import split
from dpimgsrch import find_sim
from scr import make_new_dir, delete_ref

# Initialize the Flask app and enable Cross-Origin Resource Sharing (CORS)
app = Flask(__name__)
CORS(app)

# Define global variables to be used throughout the app
global_frames = 1
global_images = 10

# Route to handle video cutting
@app.route('/app/cut/', methods=['POST'])
def cut():
    if request.method == 'POST':
        global global_frames
        video = request.files['video']
        name = video.filename
        try:
            msg = make_new_dir(name)
        except FileExistsError:
            return {"message": "FileExistsError"}
        video.save(os.path.join("./videos/"+name+'/media', name))

        array = split('./videos/'+name+'/media/'+name, name, global_frames)
        return {"message": array, "Frames": global_frames}

# Route to handle image uploading and similarity search
@app.route('/app/upload/', methods=['POST'])
def upload():
    if request.method == 'POST':
        global global_images

        photo = request.files['photo']
        video = request.files['video']
        photo.save(os.path.join("./videos/"+video.filename+"/ref", photo.filename))

        arr1 = find_sim(video.filename, photo.filename, global_images)
        array = {}
        frame = {}
        numbers = {}

        # Loop through similarity search results and encode the images as base64 strings
        for key, value in arr1.items():
            with open(value, "rb") as img_file:
                my_string = base64.b64encode(img_file.read()).decode("utf-8")
                array[key] = my_string
                numbers[key] = value


        # Delete the reference image file after the search is complete
        delete_ref(video.filename)
        return {"img": array, "Frames": numbers}

# Route to handle changing the global frames and similarity images settings
@app.route('/app/settings/', methods=['POST'])
def setting():
    if request.method == 'POST':
        global global_frames
        global global_images
        frames = int(request.form['frames'])
        si = int(request.form['SI'])
        array = []
        array.append(frames)
        array.append(si)
        if global_frames != frames:
            global_frames = frames
        if global_images != si:
            global_images = si
        return {"array": array}

# Route to retrieve a list of all video folders
@app.route('/app/folders/')
def folders():
    dir_names = next(os.walk("./videos/"))[1]
    return {"Name": dir_names}

# Route to delete a video folder and all its contents
@app.route('/app/delete/', methods=['POST'])
def delete_folder_path():
    if request.method == 'POST':
        my_string = request.form['filename']
        path = './videos/'+my_string
        shutil.rmtree(path)
        return {"test": "test"}

# Start the Flask app with debugging enabled and accessible from any IP address
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")
