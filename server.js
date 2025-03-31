const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/realestate", { useNewUrlParser: true, useUnifiedTopology: true });

// Define Schema & Model
const SupportRequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});
const SupportRequest = mongoose.model("SupportRequest", SupportRequestSchema);

// Handle support form submission
app.post("/api/support", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newRequest = new SupportRequest({ name, email, message });
    await newRequest.save();
    res.status(201).json({ message: "Support request submitted!" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start Server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
