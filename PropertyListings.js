const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  propertyType: String,
  listingType: String,
  price: Number,
  title: String,
  location: String,
  description: String,
  bedrooms: Number,
  bathrooms: Number,
  area: Number,
  amenities: [String], // Optional, safe to leave empty
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Property', propertySchema);
