import os

os.system("ls")
import subprocess

subprocess.run(["ls"])

print(os.getpid())
print(os.getppid())


os.kill(12345, 9)
os.execvp("python", ["python", "script.py"])

