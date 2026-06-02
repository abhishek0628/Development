from flask import Flask
from pymongo import MongoClient
app=Flask(__name__)
client=MongoClient("mongodb://localhost:27017")
db=client["mydatabase"]
users=db["users"]
user=={
    "name":"alex",
    "email":"alex@gmail.com"
}
users.insert_one(user)
if __name__=="__main__":
    app.run(debug=True,port=5001)

