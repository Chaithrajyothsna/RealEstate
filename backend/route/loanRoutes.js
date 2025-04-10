// routes/loanRoutes.js
const express = require('express');
const router = express.Router();
const LoanApplication = require('../models/LoanApplication');

router.post('/apply', async (req, res) => {
  try {
    const loanApp = new LoanApplication(req.body);
    await loanApp.save();
    res.status(201).json({ message: 'Application submitted successfully ✅' });
  } catch (err) {
    console.error('Loan application error:', err);
    res.status(500).json({ message: 'Server error. Try again later.' });
  }
});

module.exports = router;
