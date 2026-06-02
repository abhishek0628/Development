from flask import Flask,jsonify,request
import mysql.connector
app=Flask(__name__)
db=mysql.connector.connect(
    host="hostname",
    user="username",
    password="password",
    database="dbname"
)
cursor=db.cursor()

# create
@app.route("/register",methods=["POST"])
def Register():
    data=request.json
    sql="""
    INSERT INTO users(name,email) VALUES(%s,%s)
    """
    VALUES=(
        data["name"],
        data["email"]
    )
    cursor.execute(sql,VALUES)
    db.commit()
    return jsonify({
        "message":"user regisetered successfully"
    }),201
    
# get
@app.route("/users",methods=["GET"])
def get_user():
    cursor.execute(
        "SELECT *from users"
    )
    rows=cursor.fetchall()
    result=[]
    for row in rows:
        result.append({
            "id":row[0],
            "name":row[1],
            "email":row[2]
        })
    return jsonify({
        result
    })

@app.route("/getuser1/<int:id>",methods=["GET"])
def get_user1(id):
    cursor.execute(
        "SELECT *FROM users where id=%s",
        (id,)
    )
    row=cursor.fetchone()
    if not row:
        return jsonify({
            "message":"user not found"
        }),404
    return jsonify({
        "id":row[0],
        "name":row[1],
        "email":row[2]
    })
    
@app.route("/users/<int:id>", methods=["PUT"])
def update_user(id):

    data = request.json

    cursor.execute(
        """
        UPDATE users
        SET name=%s,email=%s
        WHERE id=%s
        """,
        (
            data["name"],
            data["email"],
            id
        )
    )

    db.commit()

    return jsonify({
        "message": "User updated"
    })

@app.route("/users/<int:id>", methods=["DELETE"])
def delete_user(id):

    cursor.execute(
        "DELETE FROM users WHERE id=%s",
        (id,)
    )

    db.commit()

    return jsonify({
        "message": "User deleted"
    })
    
