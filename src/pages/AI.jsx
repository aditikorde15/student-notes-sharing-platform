import { useState } from "react";
import { askGroq } from "../services/groq";

function AI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  async function handleAsk() {
    const response = await askGroq(question);
    setAnswer(response);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Groq AI</h1>

      <input
        type="text"
        placeholder="Ask anything..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button onClick={handleAsk}>Ask AI</button>

      <p>{answer}</p>
    </div>
  );
}

export default AI;