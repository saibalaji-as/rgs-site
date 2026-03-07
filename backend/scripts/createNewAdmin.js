const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const createNewAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB Connected');

    const email = 'ratan.s.tata@gmail.com';
    const password = 'ymca@madras';

    const existingUser = await User.findOne({ email });
    
    if (existingUser) {
      console.log('⚠️  User with this email already exists');
      console.log('Updating password instead...');
      existingUser.password = password;
      await existingUser.save();
      console.log('✅ Password updated successfully');
    } else {
      const admin = new User({
        email: email,
        password: password,
        role: 'admin'
      });

      await admin.save();
      console.log('✅ New admin user created successfully');
    }
    
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
};

createNewAdmin();
