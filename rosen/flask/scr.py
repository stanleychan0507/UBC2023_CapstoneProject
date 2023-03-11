import os 

def MakeNewDir(filename):
    if not os.path.exists(filename+'-Directory'): 
     os.makedirs('./videos/'+ filename)
     os.makedirs('./videos/'+filename+'/Photos')
     os.makedirs('./videos/'+filename+'/media')
     os.makedirs('./videos/'+filename+'/ref')
     return "MakingFile is Complete"
    else: 
       return "Unable To complete Task, Same name folder"

   