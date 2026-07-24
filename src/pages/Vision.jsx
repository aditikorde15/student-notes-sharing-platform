import { useState } from "react";
import { askVision } from "../services/groq";

function Vision() {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");

  async function handleAnalyze() {
    if (!image) {
      alert("Please select an image");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = async () => {
      const base64 = reader.result;

      const response = await askVision(base64);
      setResult(response);
    };

    reader.readAsDataURL(image);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Groq Vision</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleAnalyze}>
        Analyze Image
      </button>

      <br />
      <br />

      {image && <p>Selected: {image.name}</p>}

      <p>{result}</p>
    </div>
  );
}

export default Vision;