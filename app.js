const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ollama SigNoz Proxy Running");
});

app.post("/chat", async (req, res) => {
  try {
    const result = await axios.post("http://192.168.1.8:11434/api/generate", {
      model: "llama3.2:1b",
      prompt: req.body.prompt || "Hello",
      stream: false
    });

    res.json(result.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(8506, () => {
  console.log("Proxy running on port 8506");
});
