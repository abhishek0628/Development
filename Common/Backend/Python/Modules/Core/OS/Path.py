import os

path = os.path.join("outputs", "q3_output.txt")
print(path)
os.path.exists("outputs")
os.path.isfile("outputs/q3_output.txt")
os.path.isdir("outputs")
os.path.abspath("outputs/q3_output.txt")
os.path.basename("outputs/q3_output.txt")   # q3_output.txt
os.path.dirname("outputs/q3_output.txt")    # outputs
name, ext = os.path.splitext("image.png")
print(name)  # image
print(ext)   # .png
os.path.normpath("outputs//../outputs/q3.txt")
