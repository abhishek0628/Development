from flask import Flask ,request,jsonify
from flask_pymongo import PyMongo #pip install flask_pymongo
app=Flask(__name__)
app.config["MONGO_URI"]="mongodb://localhost:27017/mydb"
mongo=PyMongo(app)

# insert data
mongo.db.users.insert_one({
    "name":"alex",
    "email":"alex123@gmail.com"
})

# find users
users=mongo.db.users.find()
for user in users:
    print(user["name"],user["email"])

# find one user
user=mongo.db.users.find_one({"name":"alex"})
print(user)

# update user
mongo.db.users.update_one(
    {"name":"alex"},
    {"$set":{"email":"alex124@gmail.com"}}
)

# delete user
mongo.db.users.delete_one({"name":"alex"})

#create user
@app.route("/register/api", methods=["POST"])
def add_user():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")

    if not name or not email:
        return jsonify({"error": "Missing data"}), 400

    mongo.db.users.insert_one({
        "name": name,
        "email": email
    })

    return jsonify({"message": "User added successfully"})

# UPDATE user
@app.route("/update/api", methods=["PUT"])
def update():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")

    if not name or not email:
        return jsonify({"error": "missing data"}), 400

    result = mongo.db.users.update_one(
        {"email": email},
        {"$set": {"name": name}}
    )

    if result.matched_count == 0:
        return jsonify({"error": "user not found"}), 404

    return jsonify({"message": "updated successfully"})
