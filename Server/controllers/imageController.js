 import axios from "axios";

export const generateImage = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    if (!process.env.STABILITY_API_KEY) {
      throw new Error("Stability API key is missing in .env");
    }

    const response = await axios.post(
      "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
      {
        text_prompts: [{ text: prompt }],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        steps: 30,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "image/png",
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(response.data, "binary").toString("base64");

    res.json({
      success: true,
      image: base64Image,
    });
  } catch (error) {
    console.error("Stability AI Error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      error: "Image generation failed",
      details: error.response?.data?.message || error.message,
    });
  }
};
