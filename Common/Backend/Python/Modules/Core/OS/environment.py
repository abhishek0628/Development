import os
print(os.environ)
home = os.getenv("HOME")
print(home)
path = os.getenv("MY_PATH", "default_value")
os.environ["MY_VAR"] = "hello"
# export MY_VAR=hello
# set MY_VAR=hello