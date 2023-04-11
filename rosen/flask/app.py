import os
from flask import Flask,request
from flask_cors import CORS
from imageSplit import split
from dpimgsrch import find_sim
from scr import MakeNewDir, deleteRef
import base64
import shutil
import re 
'''
This is the main branch where we call all the functions we have made 
This branch get the files where all the images where cut up an dwhere the reference photo is and compares it using deepimage search
'''
app = Flask(__name__)
CORS(app)

global_frames = 1
global_images = 10

'''
This is the Function to where we cut up the videos
'''

@app.route('/app/cut/', methods=['POST'])
def cut():
    if request.method == 'POST':
        global global_frames
        video = request.files['video']
        name = video.filename
        try:
            msg = MakeNewDir(name)
        except FileExistsError:
            return {"message": "FileExistsError"}
        video.save(os.path.join("./videos/"+name+'/media',name))

        
        array = split('./videos/'+name+'/media/'+name, name,global_frames)
        return {"message": array, "Frames": global_frames}

    


'''
This funcnction is requested from front end. This is where photos are cut up  indexed and similar images are found
'''
@app.route('/app/upload/', methods=['POST'])
def upload():
    if request.method == 'POST':
        global global_images
        #requests files
        photo = request.files['photo'] #here
        video= request.files['video']
        photo.save(os.path.join("./videos/"+video.filename+"/ref",photo.filename))
        #should put this into a new function 
        arr1 = find_sim(video.filename,photo.filename,global_images)
        array= {}
        # Example string
        numbers= {}
        # Extract numbers using regular expression
        for key,value in arr1.items():
            with open(value, "rb") as img_file:
                my_string = base64.b64encode(img_file.read()).decode("utf-8")
                array[key] = my_string
                print(value)
                numbers[key]= value

        deleteRef(video.filename)
        return {"img": array,"Frames":arr1}
    


@app.route('/app/settings/', methods=['POST'])
def setting():
    if request.method == 'POST':
        global global_frames
        global global_images
        frames = int(request.form['frames'])
        SI = int(request.form['SI'])
        array = []
        array.append(frames)
        array.append(SI)
        if global_frames != frames:
            global_frames = frames
        if global_images != SI:
            global_images = SI
        return {"array": array}



@app.route('/app/folders/')
def folders(): 
    dirNames = next(os.walk("./videos/"))[1]
    return { "Name" : dirNames } 

@app.route('/app/delete/', methods=['POST'])
def deleteFolderPath(): 
    if request.method == 'POST':
        mystring = request.form['filename']
        path = './videos/'+mystring
        shutil.rmtree(path)
        return {"test": "test"}
        
            

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")
