# Intelligent FAQ Assistant

This is a Flask-based web application that integrates OpenAI's GPT model to create an intelligent FAQ assistant. Users can interact with the assistant in real-time, and the chatbot retains conversation context during the session.

---

## Features
- **Real-time Chat**: The assistant processes user queries and responds dynamically.
- **Memory Retention**: The chatbot remembers previous messages within a session.
- **Frontend UI**: An interactive web interface with animations.
- **Simple Setup**: Easily configurable with a JSON-based knowledge base.
- **LLM Integration**: Uses OpenAI's GPT-4 for generating responses.

---

## Installation and Setup

### Prerequisites
Ensure you have the following installed:
- Python 3.7+
- Flask
- OpenAI Python package
- A valid OpenAI API Key

### Installation Steps

1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/faq-assistant.git
   cd faq-assistant
   ```

2. **Set Up Configuration**
   - Create a `config.json` file in the project root:
     ```json
     {
       "OPENAI_API_KEY": "your-api-key"
     }
     ```

3. **Run the Application**
   ```sh
   python app.py
   ```
   The app will be accessible at `http://127.0.0.1:5000`.

---

## File Structure
```
faq-assistant/
│── app.py              # Main Flask application
│── config.json         # API configuration
│── templates/
│   ├── index.html      # Chat interface
│── static/
│   ├── styles.css      # Frontend styles
│   ├── script.js       # Client-side interactions
│── data/
│   ├── knowledge_base.json  # Predefined FAQs
```

---

## Usage
1. Open `http://127.0.0.1:5000` in a browser.
2. Type a question in the chatbox.
3. The assistant will respond based on the knowledge base or send queries to OpenAI's GPT-4.
4. Previous messages remain during the session but reset on refresh.

---

## Troubleshooting
### Issue: "Unexpected token '<', '<!doctype' ... is not valid JSON"
- Ensure the Flask app is running.
- Check the browser console for request errors.

### Issue: "FileNotFoundError: knowledge_base.json"
- Ensure `data/knowledge_base.json` exists with valid JSON content.

### Issue: Chatbot not responding
- Verify `config.json` contains a valid OpenAI API key.
- Restart the Flask app.

---

## License
MIT License. See `LICENSE` for details.

---

## Contact
For questions or contributions.

