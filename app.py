import openai
from flask import Flask, request, jsonify, render_template, session
import json
with open("config.json") as config_file:
    config = json.load(config_file)


app = Flask(__name__)
app.secret_key = "your_secret_key" 


def load_knowledge_base():
    with open("data/knowledge_base.json", "r") as kb_file:
        return json.load(kb_file)

knowledge_base = load_knowledge_base()

@app.route("/ask", methods=["POST"])
def ask():
    data = request.get_json()
    if not data or "messages" not in data:
        return jsonify({"error": "Invalid request format"}), 400  

    messages = data["messages"]

    if "chat_memory" not in session:
        session["chat_memory"] = []  

    session["chat_memory"].extend(messages)  

    try:
        openai.api_key = config["OPENAI_API_KEY"]
        
        response = openai.Completion.create(
        model="gpt-3.5-turbo",  
        messages=[{"role": msg["role"], "content": msg["content"]} for msg in session["chat_memory"]],
    )


    
        answer = response.choices[0].message["content"].strip()  
        session["chat_memory"].append({"role": "bot", "content": answer})  
        return jsonify({"response": answer})

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Failed to process the query"}), 500


@app.route("/")
def home():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
