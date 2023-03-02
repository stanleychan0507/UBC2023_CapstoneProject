# Importing the proper classes
from DeepImageSearch import Index,LoadData,SearchImage
import os 
import json


'''
This method imports the API DeepImageSearch. (For more information on DeepImageSearch Go to it github @DeepImageSearch)
1.DeepImageSearch will find a list of images in a folder
2.Create and Index for the images (using annoy creates a vector index)
3. using a refence photo searches through  the index and finds all images similar to the reference photo and puts it in an array
'''

def find_sim(): 
# load the Images from the Folder (You can also import data from multiple folder in python list type)
    image_list = LoadData().from_folder(['./assets/images'])
#if meta-data-file is not fount it will index data. if it is found it will skip this step to save time 
    if 'meta-data-files' not in os.listdir():
        Index(image_list).Start()
#creats array of similar images of to reference photo. You can choose the amount of similar images you want
    similar_images = SearchImage().get_similar_images(image_path="./assets/photos/jeep.jpg",number_of_images=5)

#returns array of similar images
    # arry= []
    # import base64
    # for i in similar_images:
    #     with open("./assets/images/"+i, "rb") as img_file:
    #         my_string = base64.b64encode(img_file.read()).decode("utf-8")
    #         arry.append(my_string)
    return similar_images
    

