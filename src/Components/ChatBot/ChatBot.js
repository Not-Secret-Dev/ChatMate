import axios from "axios";

const API_URL = "https://openrouter.ai/api/v1/chat/completions";
const API_KEY =
"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";

export const getAIResponse = async (message) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        model: "mistralai/Mistral-7B-Instruct",
        messages: [{ role: "user", content: message }],
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "OpenRouter API Error:",
      error.response?.data || error.message
    );
    return "Error getting response.";
  }
};
