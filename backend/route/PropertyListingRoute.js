const express = require('express');
const multer = require('multer');
const path = require('path');
const Property = require('../models/PropertyListings');
const fs = require('fs');

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Updated Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, 'property-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// Add file filter
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image! Please upload images only.'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// Updated POST route
router.post('/submit', upload.array('images', 10), async (req, res) => {
  try {
    // Get image paths from uploaded files
    const imagePaths = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    // Parse amenities from JSON string
    const amenities = JSON.parse(req.body.amenities || '[]');

    const newProperty = new Property({
      title: req.body.title,
      location: req.body.location,
      price: Number(req.body.price),
      bedrooms: Number(req.body.bedrooms),
      bathrooms: Number(req.body.bathrooms),
      area: Number(req.body.area),
      listingType: req.body.listingType,
      propertyType: req.body.propertyType,
      description: req.body.description,
      amenities: amenities,
      images: imagePaths
    });

    await newProperty.save();
    res.status(201).json({
      message: '✅ Property saved successfully!',
      property: newProperty
    });
  } catch (error) {
    console.error('❌ Server Error:', error);
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;