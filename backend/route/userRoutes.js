const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

// ✅ SECURE SIGNUP route
router.post("/signup", async (req, res) => {
  const { username, contactNo, password } = req.body;

  try {
    // 🚫 Check if user already exists by contact number
    const existingUser = await User.findOne({ contactNo });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this contact number." });
    }

    // 🔐 Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user with hashed password only
    const newUser = new User({
      username,
      contactNo,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully." });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error. Try again later." });
  }
});

// ➕ CREATE user (generic - used if needed manually)
router.post("/", async (req, res) => {
  try {
    const user = new User(req.body); // ⚠️ Not secure if used from frontend directly — only for internal/testing
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user" });
  }
});

// 📥 READ all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

// ✏️ UPDATE user
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// ❌ DELETE user
router.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

module.exports = router;
