const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  serviceRequired: {
    type: String,
    required: true,
    enum: ['petroleum', 'explosives', 'gas-cylinder', 'smpv', 'poison', 'import-export']
  },
  licenseType: {
    type: String,
    required: true,
    enum: ['fresh', 'renewal', 'amendment']
  },
  message: {
    type: String,
    trim: true
  },
  contacted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Inquiry', inquirySchema);
