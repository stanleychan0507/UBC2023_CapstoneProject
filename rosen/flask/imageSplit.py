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
def split(filepath, filename, frames):
    cap = cv2.VideoCapture(filepath)
    
    # Get the total number of frames
    frame_count = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))

    # Get the frame rate
    fps = int(cap.get(cv2.CAP_PROP_FPS))

    # Calculate the video length in seconds
    length_seconds = frame_count / fps
    #delcare counter to know when to stop cutting photoes and for image names
    count = 0
    #declaire where we will save the images
    path2 = "./videos/"+filename+"/Photos"
    #while loop cuts the image every 50 frames
    while(cap.isOpened()):
        ret, frame = cap.read()
        if ret == False:
            break
#if stament for every 50 frames
        if count < frames*length_seconds:
            #saves to folder images
            cv2.imwrite(os.path.join(path2,"filename"+str(count)+'.jpg'),frame)
            print("Saved")
            count +=1
    return None
