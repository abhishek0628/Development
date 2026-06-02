from flask import Flask
import mysql.connector
app=Flask(__name__)
db=mysql.connector.connect(
    host="hostname",
    user="username",
    password="password",
    database="dbname"
)
curser=db.cursor()
