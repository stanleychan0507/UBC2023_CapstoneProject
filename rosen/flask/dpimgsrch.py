# Importing the proper classes
from DeepImageSearch import Index,LoadData,SearchImage

def find_sim(): 
# load the Images from the Folder (You can also import data from multiple folder in python list type)
    image_list = LoadData().from_folder(['images'])
# For Faster Serching we need to index Data first, After Indexing all the meta data stored on the local path
    Index(image_list).Start()
# for searching you need to give the image path and the number of similar image you want
    SearchImage().get_similar_images(image_path="./assets/photos/jeep.jpg",number_of_images=5)
# If you want to plot similar images the you can use this method, It will plot 16 most similar images from the data index
    return None