const express = require("express");
const router = express.Router();
const Visit = require("../models/Visit");

// Create new visit
router.post("/", async (req, res) => {
  try {
    const visit = new Visit(req.body);
    await visit.save();

    // Simulate agent notification (log to console)
    console.log("\n📩 Simulated Email to Agent:");
    console.log(`Subject: New ${visit.visitType === 'virtual' ? 'Virtual Tour' : 'In-Person'} Visit Booking`);
    console.log(`User: ${visit.fullName}`);
    console.log(`Contact: ${visit.email}, ${visit.phoneNumber}`);
    console.log(`Date: ${visit.date}, Time Slot: ${visit.timeSlot}`);
    console.log(`Visit Type: ${visit.visitType}`);
    console.log(`Please contact the user to confirm the booking.\n`);

    res.status(201).json(visit);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all visits
router.get("/", async (req, res) => {
  try {
    const visits = await Visit.find();
    res.status(200).json(visits);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

