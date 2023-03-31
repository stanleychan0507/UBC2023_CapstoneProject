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
def split(filepath, filename, frames):
    vidcap = cv2.VideoCapture(filepath)

    # Initialize a variable to keep track of the current frame number
    frame_number = 0
    count = 0
    # Loop over the frames of the video
    while True:
        # Read the next frame from the video
        success, image = vidcap.read()
        path2 = "./videos/"+filename+"/Photos"
        # If reading the frame was unsuccessful, break out of the loop
        if not success:
            break
        elif count == 180:
            break
        
       
        if frame_number % frames == 0:
             cv2.imwrite(os.path.join(path2,"filename"+str(frame_number)+'.jpg'),image)
             count +=1
        
        # Increment the frame number
        frame_number += 1
        
    # Release the video file
    vidcap.release() 

    return "Completed"