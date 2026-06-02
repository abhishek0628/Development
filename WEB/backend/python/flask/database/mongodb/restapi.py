from flask import Flask,request,jsonify
from pymongo import MongoClient
from bson import ObjectId
app=Flask(__name__)
Client=MongoClient("mongodb://localhost:27107")
db=Client["users_db"]
users=db["users"]

# POST
@app.route("/register",methods=["POST"])
def register():
    data=request.json
    name=data["name"]
    email=data["email"]
    users.insert_one({
        "name":name,
        "email":email
    })
    return jsonify({
        "message":"registered successfully"
    })

# GET
@app.route("/users",methods=["GET"])
def Users():
   result=[]
   for user in users.find():
       user["_id"]=str(user["_id"])
       result.append(user)
       
   return jsonify(result)
    
# GET one user 
@app.route("/user/<id>",methods=["GET"])
def GetUser(id):
    user=users.find_one({
        "_id":ObjectId(id)
    })
    if not user:
        return jsonify({
            "message":"user not found"
        }),404
    user["_id"]=str(user["_id"])
    return jsonify(user)

# update user
@app.route("/update/<id>",methods=["PUT"])
def update_user(id):
    data=request.json
    user=users.find_one(
        {"_id":ObjectId(id)},
        {
            "$set":
                {
                "name":data["name"],
                "email":data["email"]
                }
        }
    )
    return jsonify({
        "message":"user updated successfully"
    })

# delete user
@app.route("/delete/<id>",methods=["DELETE"])
def deleteuser(id):
    data=request.json
    user=user.delete_one(
        {"_id":ObjectId(id)}
    )
    return jsonify({
        "message":"deleted succesfully"
    })
if __name__=="_main_":
    app.run(debug=True,port=5001)