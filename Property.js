const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
  title: String,
  price: String,
  size: String,
  location: String,
  highlights: [String],
  images: [String],
});

module.exports = mongoose.model("Property", PropertySchema);
