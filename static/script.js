document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("query-input");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendQuery();
        }
    });
});

let chatMemory = [];

function sendQuery() {
    const inputField = document.getElementById("query-input");
    const query = inputField.value.trim();
    if (!query) return;

    addMessage(query, "user-message");
    inputField.value = "";
    inputField.focus();

    chatMemory.push({ role: "user", content: query });

    fetch("/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: chatMemory })
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(err => { throw new Error(err.error || "Unknown error"); });
        }
        return response.json();
    })
    .then(data => {
        chatMemory.push({ role: "bot", content: data.response });
        addMessage(data.response, "bot-message");
    })
    .catch(error => {
        console.error("Chat error:", error.message);
        addMessage("⚠️ Error: Unable to fetch response.", "error-message");
    });
}

function addMessage(text, className) {
    const chatLog = document.getElementById("chat-log");
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", className);
    messageDiv.textContent = text;
    chatLog.appendChild(messageDiv);


    chatLog.scrollTop = chatLog.scrollHeight;
}
