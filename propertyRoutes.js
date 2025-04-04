const express = require("express");
const router = express.Router();
const Property = require("../models/Property");
const Request = require("../models/Request");

// GET a single property
router.get("/:id", async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: "Property not found" });
  }
});

// POST: Handle EMI, Visit, Callback requests
router.post("/:id/request", async (req, res) => {
  const { type, additionalInfo } = req.body;
  try {
    const newRequest = new Request({
      type,
      propertyId: req.params.id,
      additionalInfo,
    });
    await newRequest.save();
    res.json({ message: `${type} request stored.` });
  } catch (err) {
    res.status(500).json({ error: "Request failed" });
  }
});

module.exports = router;
