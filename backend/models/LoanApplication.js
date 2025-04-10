// models/LoanApplication.js
const mongoose = require('mongoose');

const loanApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  loanAmount: { type: Number, required: true },
  propertyValue: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('LoanApplication', loanApplicationSchema);
