const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: String,
  numPersons: Number,
  date: String,
  timeSlot: String,
  additionalNotes: String,
  visitType: {
    type: String,
    enum: ['virtual', 'in-person'],
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Visit", visitSchema);
