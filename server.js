// AKRIVO AI Backend - Fully Working Version

const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Test route (important for checking server)
app.get("/", (req, res) => {
  res.send("AKRIVO Backend is Running 🚀");
});

// Chat route
app.post("/chat", (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "No message received" });
    }

    // Dummy AI Response
    const reply = `You said: "${message}". AKRIVO 🤖 is working perfectly!`;

    return res.json({ content: reply });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log(`AKRIVO Backend running on:`);
  console.log(`http://localhost:${PORT}`);
  console.log("=================================");
});