from flask import Flask #pip install flask
app=Flask(__name__)
@app.route("/")
def home():
    return "welcome home"
if __name__=="__main__":
    app.run(port=8000)