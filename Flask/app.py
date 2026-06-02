from flask import Flask,request,jsonify
from pymongo import MongoClient
from bson import ObjectId
app=Flask(__name__)
Client=MongoClient("mongodb://localhost:27017")
db=Client["Flagdb"]
users=db["users"]
@app.route("/register",methods=["POST"])
def Register():
    data=request.json
    
@app.route("/",methods=["GET"])
def Home():
    return "this is home page"

app.run(debug=True,port=5001)
