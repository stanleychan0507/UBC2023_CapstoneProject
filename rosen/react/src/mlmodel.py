import pandas as pd
from sklearn.linear_model import LinearRegression
import pickle

df = pd.read_csv("testFile_FuelConsumption.csv")
#use required features
cdf = df[['ENGINESIZE','CYLINDERS','FUELCONSUMPTION_COMB','CO2EMISSIONS']]

#Training Data and Predictor Variable
# Use all data for training (tarin-test-split not used)
x = cdf.iloc[:, :3]
y = cdf.iloc[:, -1]
regressor = LinearRegression()

#Fitting model with trainig data
regressor.fit(x, y)

# Saving model to current directory
# Pickle serializes objects so they can be saved to a file, and loaded in a program again later on.
pickle.dump(regressor, open('model.pkl','wb'))

# Importing the proper classes
# from DeepImageSearch import Index,LoadData,SearchImage
# load the Images from the Folder (You can also import data from multiple folder in python list type)
# image_list = LoadData().from_folder(['images','wiki-images'])
# For Faster Serching we need to index Data first, After Indexing all the meta data stored on the local path
# Index(image_list).Start()
# for searching you need to give the image path and the number of similar image you want
# SearchImage().get_similar_images(image_path=image_list[0],number_of_images=5)
# If you want to plot similar images the you can use this method, It will plot 16 most similar images from the data index
# SearchImage().plot_similar_images(image_path = image_list[0])

'''
#Loading model to compare the results
model = pickle.load(open('model.pkl','rb'))
print(model.predict([[2.6, 8, 10.1]]))
'''

'''
# Importing the proper classes
from DeepImageSearch import Index,LoadData,SearchImage

# load the Images from the Folder (You can also import data from multiple folders in python list type)
image_list = LoadData().from_folder(["movietest"])

# For Faster Serching we need to index Data first, After Indexing all the meta data stored on the local path
Index(image_list).Start()

# for searching, you need to give the image path and the number of the similar image you want
print(SearchImage().get_similar_images(image_path="jeep.jpg",number_of_images=5))
'''