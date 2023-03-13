import os
from flask import Flask,request
from flask_cors import CORS
from imageSplit import split
from dpimgsrch import find_sim
from scr import MakeNewDir
import base64
'''
This is the main branch where we call all the functions we have made 
This branch get the files where all the images where cut up an dwhere the reference photo is and compares it using deepimage search
'''
app = Flask(__name__)
CORS(app)


'''
This is the Function to where we cut up the videos
'''

@app.route('/app/cut/', methods=['POST'])
def cut():
    if request.method == 'POST':
        video = request.files['video']
        name = video.filename
        try:
            msg = MakeNewDir(name)
        except FileExistsError:
            return {"message": "FileExistsError"}
        video.save(os.path.join("./videos/"+name+'/media',name))
        array = split('./videos/'+name+'/media/'+name, name)
        return {"message": name,"timestamp": array}
    


'''
This funcnction is requested from front end. This is where photos are cut up  indexed and similar images are found
'''
@app.route('/app/upload/', methods=['POST'])
def upload():
    if request.method == 'POST':
        #requests files
        photo = request.files['photo'] #here
        video= request.files['video']
        photo.save(os.path.join("./videos/"+video.filename+"/ref",photo.filename))
        #should put this into a new function 
        arr1 = find_sim(video.filename,photo.filename)
        array= {}
        for key,value in arr1.items():
            with open(value, "rb") as img_file:
                my_string = base64.b64encode(img_file.read()).decode("utf-8")
                array[key] = my_string
        return {"img": array}



@app.route('/app/folders/')
def folders(): 
    dirNames = next(os.walk("./videos/"))[1]
    return { "Name" : dirNames } 


if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0")
