#Libraries importation
import json
import nltk
import numpy
import tflearn
import tensorflow
import random
import pickle
from nltk.stem.lancaster import LancasterStemmer




# Loading the Json file which contains the tags:
with open("intents.json") as file:
    data = json.load(file)

# [Only for first time use] First time your run the program use this; it will download the english patch for Nltk 
# nltk.download('punkt')

stemmer = LancasterStemmer()

# Data preprocessing method:Prepare data before inputting them into the Neuronal Network.
def Data_preprocessing():
      # Load the neuronal network model(if the model exists):
    try:
        with open("data.pickle", "rb") as f:
            words, labels, training, output = pickle.load(f)
  
    # Prepare data for model training.(if the model doesn't exist):
    except:
        
    

        # Initialize training parameters:
        words = []
        labels = []
        docs_x = []
        docs_y = []



        for intent in data["intents"]:
            for pattern in intent["patterns"]:

                # Split words from the sentence:
                wrds = nltk.word_tokenize(pattern)

                # Add the splitted word into a list:
                words.extend(wrds)

                # X_train [[List word pattern 1],[List word pattern 2], ... [List word pattern n]]:
                docs_x.append(wrds)

                # Y_train [Tag1,Tag2,...,[Tag n]]:
                docs_y.append(intent["tag"])

            if intent["tag"] not in labels:
                labels.append(intent["tag"])
        
        # Delete the duplicated words:
        words = [stemmer.stem(w.lower()) for w in words if w != "?"]

        # Filter the words and the tags:
        words = sorted(list(set(words)))
        labels = sorted(labels)

        training = []
        output = []

        # Fulfill the output list with [0,0.....,0]:
        out_empty = [0 for _ in range(len(labels))]

        
        # Encode the words:
        for x, doc in enumerate(docs_x):
        
            bag = []
            wrds = [stemmer.stem(w.lower()) for w in doc]

            for w in words:
                if w in wrds:
                    bag.append(1)
                else:
                    bag.append(0)

            output_row = out_empty[:]
            output_row[labels.index(docs_y[x])] = 1

            training.append(bag)
            output.append(output_row)

        # Transform result to NpArray for model learning:
        training = numpy.array(training)
        output = numpy.array(output)

        # Save the parameters into a data.pickle file:
        with open("data.pickle", "wb") as f:
            pickle.dump((words, labels, training, output), f)
    

    return words, labels, training, output

  
# Model training method:
def Model_training():
    
    words, labels, training, output = Data_preprocessing()
    
    #Initialization
    tensorflow.reset_default_graph()

    #Tunning the hyper parameters: input layers, hidden layers, activation functions, output layers, node numbers for each layer: 
    net = tflearn.input_data(shape=[None, len(training[0])])
    net = tflearn.fully_connected(net, 8)
    net = tflearn.fully_connected(net, 8)
    net = tflearn.fully_connected(net, len(output[0]), activation="softmax")
    net = tflearn.regression(net)

    #Model Instantiation:
    model = tflearn.DNN(net)

    #Model training:
    model.fit(training, output, n_epoch=1000, batch_size=8, show_metric=True)

    #Save the model after training:
    model.save("model.tflearn")

    return model, words, labels
    

# Load model method:
def Load_model():
        
    
    words, labels, training, output = Data_preprocessing()
    
    #Initialization
    tensorflow.reset_default_graph()

    #Tunning the hyper parameters: input layers, hidden layers, activation functions, output layers, node numbers for each layer:
    net = tflearn.input_data(shape=[None, len(training[0])])
    net = tflearn.fully_connected(net, 8)
    net = tflearn.fully_connected(net, 8)
    net = tflearn.fully_connected(net, len(output[0]), activation="softmax")
    net = tflearn.regression(net)

    #Model Instantiation:
    model = tflearn.DNN(net)

    #Load the model:
    model.load("model.tflearn")

    return(model, words, labels)

# User data preparation method:
def Bag_of_words(s, words):
    bag = [0 for _ in range(len(words))]

    s_words = nltk.word_tokenize(s)
    s_words = [stemmer.stem(word.lower()) for word in s_words]

    for se in s_words:
        for i, w in enumerate(words):
            if w == se:
                bag[i] = 1
            
    return numpy.array(bag)

# Answer generation method:
def Load_answer(message):
    
    print("Begin the discution with the bot (tipe 'quit' to exit)!")
    
    model, words, labels = Load_model()

    results = model.predict([Bag_of_words(message, words)])
    results_index = numpy.argmax(results)
    tag = labels[results_index]
    
    print(results)
    print(results_index)

    if(results[0][results_index] > 0.75):
        
        for tg in data["intents"]:
            if tg['tag'] == tag:
                responses = tg['responses']

        print(random.choice(responses))
        res=random.choice(responses)

    else:
        print("Ooops, Sorry i didn't understand :s!")  
        res="Ooops, Sorry i didn't understand :s! "

    message = {
                "message":res
                }


    return(json.dumps(message))


#To create/train the model:

'''
 Model_training()
'''

#To test:
'''
#[For Test method] Chat Method:
def Chat():
    print("Begin the discution with the bot (tipe 'quit' to exit)!")
    model, words, labels = Load_model()

    while True:
        inp = input("you: ")
        if inp.lower() == "quit":
            break

        results = model.predict([Bag_of_words(inp, words)])[0]
        results_index = numpy.argmax(results)
        tag = labels[results_index]
        
        print(results)
        print(results_index)

        if(results[results_index] > 0.7):
            
            for tg in data["intents"]:
                if tg['tag'] == tag:
                    responses = tg['responses']

            print(random.choice(responses))

        else:
            print("Ooops, Sorry i didn't understand :s! ")  

Chat()
'''