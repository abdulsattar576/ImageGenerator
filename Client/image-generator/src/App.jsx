 import { useState } from "react";
import { generateImage } from "./services/imageService";
import ImageDisplay from "./components/ImageDisplay";

function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    setError("");
    setImage("");
    setLoading(true);
    try {
      const data = await generateImage(prompt);
      if (data.success) {
        setImage(`data:image/png;base64,${data.image}`);
      } else {
        setError(data.error || "Image generation failed");
      }
    } catch (err) {
      setError(err.message || "Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1>AI Image Generator 🎨</h1>
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe an image (e.g., 'A cat wearing sunglasses')"
          style={{ width: "100%", padding: "10px" }}
        />
        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            backgroundColor: loading ? "#ccc" : "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {loading ? "Generating..." : "Generate Image"}
        </button>
      </div>
      {error && (
        <div
          style={{
            color: "red",
            margin: "10px 0",
            padding: "10px",
            background: "#ffeeee",
          }}
        >
          {error}
        </div>
      )}
      <ImageDisplay image={image} />
    </div>
  );
}

export default App;
