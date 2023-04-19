import os 
import glob

# This function creates a new directory for a given filename if it doesn't already exist
def make_new_dir(filename):
    if not os.path.exists(filename+'-Directory'):
        # Create a new directory for the given filename
        os.makedirs('./videos/'+ filename)
        # Create subdirectories for different types of files
        os.makedirs('./videos/'+filename+'/Photos')
        os.makedirs('./videos/'+filename+'/media')
        os.makedirs('./videos/'+filename+'/ref')
        # Return a message to indicate the completion of the task
        return "MakingFile is Complete"
    else:
        # Return an error message if the directory with the same name already exists
        return "Unable To complete Task, Same name folder"

# This function deletes all the files in the 'ref' subdirectory of a given filename
def delete_ref(filename): 
    # Get a list of all the files in the 'ref' subdirectory
    files = glob.glob('./videos/'+filename +'/ref/*')
    # Loop through all the files and delete them one by one
    for f in files:
        os.remove(f)
