from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route("/")
def home():
	return render_template("index.html")

@app.route("/food_entry")
def submit_food_entry():
	return render_template("food_entry.html")

@app.route("/food_listings")
def food_listings():
	return render_template("food_listings.html")

if __name__ == "__main__":
	app.run(debug=True)
