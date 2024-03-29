import string
import time
import random
from flask import Flask, render_template, g, jsonify, request

DEBUG = True
app = Flask(__name__)
app.config.from_object(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/get_time')
def get_time():
	'''
	return local time at server, and send back request timestamp
	so client can measure round trip time
	insert random delays to simulate network delays
	'''
	random_delay()
	request_time = request.args.get('request_time')
	seconds = time.time()
	milliseconds = int(seconds * 1000)
	server_time = milliseconds
	random_delay()
	return jsonify(request_time = request_time, server_time = server_time)

# produce delay in the range 0 to 400ms
def random_delay():
	delay = random.randint(0,100)
	time.sleep(float(delay)/1000)
