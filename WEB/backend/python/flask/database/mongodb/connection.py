from flask import Flask
from pymongo import MongoClient
app=Flask(__name__)
Client=MongoClient("mongodb://localhost:27017")
db=Client["Users_db"]
users=db["users"]

