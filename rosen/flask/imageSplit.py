import datetime
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

#this method first gets video from filepath in the while loop it counts number of frams cut. note we only have 10 frame limit as a test
def split(filepath, filename):
    cap = cv2.VideoCapture(filepath)
    array = []
 
#delcare counter to know when to stop cutting photoes and for image names
    i=1
    count = 0
#declaire where we will save the images
    path2 = "./videos/"+filename+"/Photos"
#while loop cuts the image every 50 frames
    while(cap.isOpened()):
        ret, frame = cap.read()
        if count == 10:
            break
        if ret == False:
            break
#if stament for every 50 frames
        if i%50 == 0 and count < 10:
            #saves to folder images
            cv2.imwrite(os.path.join(path2,"filename"+str(count)+'.jpg'),frame)
            print("Saved")
            count +=1
            array.append(datetime.datetime.fromtimestamp(cap.get(cv2.CAP_PROP_POS_MSEC)/1000.0).strftime('%H:%M:%S')) 
            

        i+=1

    return array
