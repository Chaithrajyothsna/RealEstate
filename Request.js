const mongoose = require("mongoose");

const RequestSchema = new mongoose.Schema({
  type: String, // "visit", "emi", "callback"
  propertyId: mongoose.Schema.Types.ObjectId,
  createdAt: { type: Date, default: Date.now },
  additionalInfo: mongoose.Schema.Types.Mixed,
});

module.exports = mongoose.model("Request", RequestSchema);
