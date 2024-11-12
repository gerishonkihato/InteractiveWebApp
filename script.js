// Function to display a personalized greeting
function displayGreeting() {
    const nameInput = document.getElementById('nameInput').value;
    const greetingMessage = document.getElementById('greeting-message');

    if (nameInput) {
        greetingMessage.textContent = `Hello, ${nameInput}! Welcome to Company X!`;
    } else {
        greetingMessage.textContent = 'Please enter your name.';
    }
}

// Function to clear the feedback form
function clearForm() {
    document.getElementById('feedback-form').reset();
}
