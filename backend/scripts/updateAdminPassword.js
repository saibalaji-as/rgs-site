const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const updateAdminPassword = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    const admin = await User.findOne({ email: process.env.ADMIN_EMAIL });
    
    if (!admin) {
      console.log('❌ Admin user not found');
      console.log(`Looking for: ${process.env.ADMIN_EMAIL}`);
      process.exit(1);
    }

    admin.password = process.env.ADMIN_PASSWORD;
    await admin.save();
    
    console.log('✅ Admin password updated successfully');
    console.log(`Email: ${process.env.ADMIN_EMAIL}`);
    console.log(`New Password: ${process.env.ADMIN_PASSWORD}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

updateAdminPassword();
