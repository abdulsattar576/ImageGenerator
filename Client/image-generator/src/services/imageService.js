import axios from "axios";

export const generateImage = async (prompt) => {
  if (!prompt.trim()) {
    throw new Error("Please enter a prompt");
  }
  const response = await axios.post("http://localhost:3000/api/generate-image", { prompt });
  return response.data;
};
