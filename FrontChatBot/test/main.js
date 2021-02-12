const voice = document.getElementById("voice");
const voice2text = document.querySelector(".voice2text");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recorder = new SpeechRecognition();

function addHumanText(text) {
  const chatContainer = document.createElement("div");
  chatContainer.classList.add("chat-container");
  const chatBox = document.createElement("p");
  chatBox.classList.add("voice2text");
  const chatText = document.createTextNode(text);
  chatBox.appendChild(chatText);
  chatContainer.appendChild(chatBox);
  return chatContainer;
}

function addBotText(text) {
  const chatContainer1 = document.createElement("div");
  chatContainer1.classList.add("chat-container");
  chatContainer1.classList.add("darker");
  const chatBox1 = document.createElement("p");
  chatBox1.classList.add("voice2text");
  const chatText1 = document.createTextNode(text);
  chatBox1.appendChild(chatText1);
  chatContainer1.appendChild(chatBox1);
  return chatContainer1;
}

function botVoice(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "Désoler, je n'arrive pas a comprendre.";

    if (message.includes('vas-tu')) {
      speech.text = "Je vais bien merci, et vous comment allez-vous?";
    }

     if (message.includes('Salut')) {
      speech.text = "Bonjour je suis votre assistante comment puis-je vous aidez?";
    }

    if (message.includes('Bien')) {
      speech.text = "Parfait !. Comment puis-je vous aidez?";
    }

    if (message.includes('Temp')) {
      speech.text = "Bien sur. Dans quelle ville êtes-vous actuellement?";
    }

    if (message.includes('Tunis')) {
      speech.text = "Il fait 13 degré a Tunis.";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    var element = document.getElementById("container");
    element.appendChild(addBotText(speech.text));
}

recorder.onstart = () => {
  console.log('Voice activated');
};

recorder.onresult = (event) => {
  const resultIndex = event.resultIndex;
  const transcript = event.results[resultIndex][0].transcript;
  var element = document.getElementById("container");
  element.appendChild(addHumanText(transcript));
  botVoice(transcript);
};

voice.addEventListener('click', () =>{
 botVoice("Salut");
});
