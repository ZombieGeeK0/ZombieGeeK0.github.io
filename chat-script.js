const socket = io();

socket.on('message', (message) => {
  appendMessage(message);
});

function sendMessage() {
  const userInput = document.getElementById("user-input");
  const message = userInput.value;
  
  if (message.trim() !== "") {
    appendMessage("You: " + message);
    socket.emit('chatMessage', message);
    userInput.value = "";
  }
}

function appendMessage(message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
}
