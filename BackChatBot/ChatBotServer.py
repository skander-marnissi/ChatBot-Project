from flask import Flask, render_template, url_for, flash, redirect, session, request, jsonify, send_from_directory
import os
from ChatBotScript import Load_answer
import json
from flask_cors import CORS, cross_origin


app = Flask(__name__)
CORS(app, support_credentials=True)

#Test route 
@app.route("/")
def main() :
	return "Your server is Running , WOoooHooooo ! "

#Script route
@app.route("/chatbot",methods=['POST','GET'])
@cross_origin(supports_credentials=True)
def receive():
	
    #Get Json object(message)
    
        data = request.get_json()
       #flag = data['flag']
        message = data['message']
      
        #Utf-8 encode
        a = message.encode('utf-8')
   
        #Testing
        print("______________________________________________________________________________")
        print("Testing received json Data : ",message)

        
                               #ChatBot Response
 ######################################################################################

        res = Load_answer(message)

        response=json.loads(res)

        print(response)

        return jsonify(response)
               
######################################################################################

# Server configuration(optionnal parameters :host = 'Ip_address',threaded=True)
if __name__ == "__main__":
    app.run(debug = True)	