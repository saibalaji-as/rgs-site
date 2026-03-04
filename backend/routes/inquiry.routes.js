const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Inquiry = require('../models/Inquiry');
const authMiddleware = require('../middleware/auth.middleware');
const { sendInquiryEmail } = require('../utils/email');

// Submit Inquiry (Public)
router.post('/', [
  body('fullName').notEmpty().trim(),
  body('email').isEmail().normalizeEmail(),
  body('phone').matches(/^[0-9]{10}$/),
  body('serviceRequired').notEmpty(),
  body('licenseType').notEmpty()
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const inquiry = new Inquiry(req.body);
    await inquiry.save();

    // Send email notification
    await sendInquiryEmail(inquiry);

    res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully',
      data: inquiry
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Get All Inquiries (Protected)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const { service, contacted } = req.query;
    const filter = {};
    
    if (service) filter.serviceRequired = service;
    if (contacted !== undefined) filter.contacted = contacted === 'true';

    const inquiries = await Inquiry.find(filter).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: inquiries.length,
      data: inquiries
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Mark as Contacted (Protected)
router.patch('/:id/contacted', authMiddleware, async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { contacted: true },
      { new: true }
    );

    if (!inquiry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Inquiry not found' 
      });
    }

    res.json({
      success: true,
      data: inquiry
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

// Delete Inquiry (Protected)
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndDelete(req.params.id);

    if (!inquiry) {
      return res.status(404).json({ 
        success: false, 
        message: 'Inquiry not found' 
      });
    }

    res.json({
      success: true,
      message: 'Inquiry deleted successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      message: error.message 
    });
  }
});

module.exports = router;
