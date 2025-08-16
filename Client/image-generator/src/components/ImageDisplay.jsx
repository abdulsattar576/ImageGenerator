import React from "react";

const ImageDisplay = ({ image }) => {
  if (!image) return null;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = image;
    link.download = "generated-image.png";
    link.click();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Generated Image:</h2>
      <img
        src={image}
        alt="AI Generated"
        style={{
          maxWidth: "100%",
          border: "1px solid #ddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      />
      <button
        onClick={handleDownload}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Download Image
      </button>
    </div>
  );
};

export default ImageDisplay;
