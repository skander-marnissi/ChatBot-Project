
const messages = document.getElementById('messages');

function appendMessage() {
	const message = document.getElementsByClassName('message')[0];
  const newMessage = message.cloneNode(true);
  messages.appendChild(newMessage);
  window.scrollTo(0, messages.innerHeight);
}

function getMessages() {
	// Prior to getting your messages.
 /*
   * Get your messages, we'll just simulate it by appending a new one syncronously.
   */
  appendMessage();
  // After getting your messages.

}




setInterval(getMessages, 100);