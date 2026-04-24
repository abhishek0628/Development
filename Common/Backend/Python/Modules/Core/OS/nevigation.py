import os

print(os.getcwd())
os.chdir("outputs")
os.chdir("..")
os.chdir("/Users/abhishekkumar/Desktop/ASSG2/images")
path = os.path.join(os.getcwd(), "outputs")
os.chdir(path)
