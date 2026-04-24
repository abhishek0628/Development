import os

fd = os.open("outputs/test.txt", os.O_WRONLY | os.O_CREAT)
os.write(fd, b"Hello low-level world\n")
fd = os.open("outputs/test.txt", os.O_RDONLY)

content = os.read(fd, 100)  # read 100 bytes
print(content)

os.close(fd)

'''5. Common flags
Flag	Meaning
os.O_RDONLY	read only
os.O_WRONLY	write only
os.O_RDWR	read + write
os.O_CREAT	create file
os.O_APPEND	append mode
os.O_TRUNC	overwrite file'''
with open("file.txt", "w") as f:
    f.write("hello")