# Importing the proper classes
from DeepImageSearch import Index,LoadData,SearchImage
import os
import json
import shutil


'''
This method imports the API DeepImageSearch. (For more information on DeepImageSearch Go to it github @DeepImageSearch)
1. DeepImageSearch will find a list of images in a folder.
2. Create an index for the images (using annoy creates a vector index).
3. Using a reference photo, search through the index and find all images similar to the reference photo and puts it in an array.
'''


def find_sim(video_name, photo_name, num_images):
    # Load the images from the folder (You can also import data from multiple folder in python list type)
    path_photos = "./videos/" + video_name + "/Photos"
    path_ref = "./videos/" + video_name + "/ref/" + photo_name
    path_main = "./meta-data-files"
    path_vid_folder = "./videos/" + video_name
    image_list = LoadData().from_folder([path_photos])

    # If meta-data-file is not found, it will index data. If it is found, it will skip this step to save time.
    if 'meta-data-files' not in os.listdir(path_vid_folder):
        Index(image_list).Start()
    else:
        shutil.move(path_vid_folder + "/meta-data-files", path_main)

    # Creates an array of similar images of to reference photo. You can choose the amount of similar images you want.
    similar_images = SearchImage().get_similar_images(image_path=path_ref, number_of_images=num_images)
    shutil.move(path_main, path_vid_folder)
    return similar_images


