// Chat functionality script.js

// Append a message to the chat
function appendMessage(message, isUser) {
    const chatContainer = document.getElementById('chat-container');
    const messageElement = document.createElement('div');
    messageElement.className = isUser ? 'user-message' : 'gpt-message';
    messageElement.innerText = message;
    chatContainer.appendChild(messageElement);
}

// Get GTE response with doctrine-based responses
function getGTEResponse(userInput) {
    const responses = {
        'hello': 'Hi there! How can I assist you today?',
        'how are you?': 'I am just a program, but thanks for asking!',
        'help': 'Sure! What do you need help with?'
    };
    return responses[userInput.toLowerCase()] || "I'm sorry, I don't understand that.";
}

// Send message function
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userInput = inputField.value;
    appendMessage(userInput, true);
    inputField.value = '';

    const response = getGTEResponse(userInput);
    appendMessage(response, false);
}

// Enter key event listener
document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});
