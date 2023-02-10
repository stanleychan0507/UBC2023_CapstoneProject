import cv2 
import os




#this will cut the photos

#this method first gets video from filepath in the while loop it counts number of frams cut. note we only have 10 frame limit as a test
def split(filename):
    cap = cv2.VideoCapture(filename)
    i=1
    count = 0
    path2 = "./assets/images"

    while(cap.isOpened()):
        ret, frame = cap.read()

        if ret == False:
            break
        
        if i%50 == 0 and count < 10:
            cv2.imwrite(os.path.join(path2,'torontoPhoto'+str(count)+'.jpg'),frame)
            count +=1

        i+=1

    return None
