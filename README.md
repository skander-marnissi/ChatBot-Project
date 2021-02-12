# ChatBot-Project

A bot that uses a neuronal network using tensorflow and Tflearn to automatically act as a support for customers on python 3.6.

## Installation
Open terminal and type the following commands: 

```bash
git clone https://github.com/SkanderMarnissi/ChatBot-Project/
```
Then type 

```bash
cd ChatBot-Project
cd BackChatBot
pip install -r requirements.txt
```

## How does it work?

### The program takes a json file "intents.json" as input which contains four parameters: 

**tags:It's like the sent message summary id that will be predicted from the model it self.**

**patterns:The set of possible patterns with which we can predict the tags(after processing)** 

**responses:The set of dif fined responses when the tag of the sent message is identified.**

**context_set:Optional parameter to set the context of the message(to have more accurate results)**

*Note: you can change the patterns, tags and answers to train your model on your particular subject.*

### To train the model:
In order to create/train the model execute the "Model_training()" from ChatBotScript.py file in the terminal:


### Enter in your terminal: 

```bash
python ChatBotScript.py
```
Don't forget to run this line at the first run:

```python
# [Only for first time use] First time your run the program use this; it will download the english patch for Nltk 
nltk.download('punkt')
```


### To use server: 

In order to test your server, you should run the ChatBotServer.py file in the terminal like this: 

```bash

Python ChatBotServer.py

```

## To test

### Step 1:
Run the server tap this in your terminal:

```bash
	Python ChatBotServer.py
```
### Step 2: 
Once the server runs open the index.html file under FrontChatBot directory: it will load a blank page into your browser with an integrated chatbox(Imported from the ChatBot.html).

### Step 3:
Now type a message in the input and send it(it will send the data via Ajax in a json format to the Flask server, which will process the message into a Neuronal Network model.).

### Step 4:
Response from the server: after processing the sent message, the server will send a response which will be handled by Ajax.
  
*SKANDER MARNISSI COPYRIGHT © 2021 - ALL RIGHTS RESERVED*