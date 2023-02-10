import cv2 
import os

'''
This uses the API from openCV
With purpose of this Function is to split a video into frames and save them as images for the user to use later 
1. first we call the folder where the image is saved
2. use a while loop to to cut frames into 50 frames per secound 
3. save images into file  
'''


#this will cut the photos
def split(filename):
    cap = cv2.VideoCapture(filename)
#delcare counter to know when to stop cutting photoes and for image names
    i=1
    count = 0
#declaire where we will save the images
    path2 = "./assets/images"
#while loop cuts the image every 50 frames
    while(cap.isOpened()):
        ret, frame = cap.read()

        if ret == False:
            break
#if stament for every 50 frames
        if i%50 == 0 and count < 10:
            #saves to folder images
            cv2.imwrite(os.path.join(path2,'torontoPhoto'+str(count)+'.jpg'),frame)
            count +=1

        i+=1

    return None
