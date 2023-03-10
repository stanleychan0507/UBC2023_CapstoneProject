# Importing the proper classes
from DeepImageSearch import Index,LoadData,SearchImage
import os 
import json
import shutil


'''
This method imports the API DeepImageSearch. (For more information on DeepImageSearch Go to it github @DeepImageSearch)
1.DeepImageSearch will find a list of images in a folder
2.Create and Index for the images (using annoy creates a vector index)
3. using a refence photo searches through  the index and finds all images similar to the reference photo and puts it in an array
'''

def find_sim(videoname,photoname): 
    # load the Images from the Folder (You can also import data from multiple folder in python list type)
    pathPhotos= "./videos/"+videoname+"/Photos"
    pathRef = "./videos/"+videoname+"/ref/"+photoname
    pathMain = "./meta-data-files"
    pathVidoFolder = "./videos/"+videoname 
    image_list = LoadData().from_folder(["./videos/"+videoname+"/Photos"])

    #if meta-data-file is not fount it will index data. if it is found it will skip this step to save time 
    if 'meta-data-files' not in os.listdir(pathVidoFolder):
       Index(image_list).Start()
    else:
        shutil.move(pathVidoFolder+ "/meta-data-files", pathMain)
    #creats array of similar images of to reference photo. You can choose the amount of similar images you want
    similar_images = SearchImage().get_similar_images(image_path= pathRef,number_of_images=5)
    shutil.move(pathMain,pathVidoFolder)
    return similar_images
    

