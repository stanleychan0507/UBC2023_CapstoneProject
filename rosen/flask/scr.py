import os 


def MakeNewDir(filename):
    if not os.path.exists(filename+'-Directory'): 
     os.mkdir('./videos/'+ filename)
     os.mkdir('./videos/'+filename+'/Photos')
     os.mkdir('./videos/'+filename+'/media')
     os.mkdir('./videos/'+filename+'/ref')
     return "MakingFile is Complete"
    else: 
       return "Unable To complete Task, Same name folder"

   