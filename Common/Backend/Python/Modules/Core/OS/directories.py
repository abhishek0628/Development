import os
os.mkdir("folder")# creating single folder
os.mkdir("folder",exist_ok=True) #check if folder is already present, if presents no error
os.makedirs("folder/test/test2", exist_ok=True) #make nested folder
os.makedirs("parent/child/grandchild", exist_ok=True)
os.listdir("outputs")#listing files
os.remove("outputs/data.txt")#dleting file

os.rmdir("outputs")#remove empty folder
import shutil
shutil.rmtree("outputs")#deleting non empty folder
os.rename("old.txt", "new.txt")
os.path.exists("outputs")
os.path.isfile("file.txt")
os.path.isdir("outputs")