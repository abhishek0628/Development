from flask import Flask
from pymongo import MongoClient
app=Flask(__name__)
Client=MongoClient("mongodb://localhost:27017")
db=Client["Users_db"]
users=db["users"]

# create
users.insert_one({
    "name":"alex",
    "email":"alex@gmail.com"
})

# read
users.find_one({
    "name":"alex"
})

# update
users.update_one(
    {"name":"alex"},
    {"$set":{"email":"alex123@gmail.com"}}
)

# delete
users.delete_one({"name":"alex"})