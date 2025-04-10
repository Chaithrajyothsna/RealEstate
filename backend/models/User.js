const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  contactNo: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Only store the hashed password
});

module.exports = mongoose.model("User", userSchema);
