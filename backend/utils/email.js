const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendInquiryEmail = async (inquiry) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `New Inquiry: ${inquiry.serviceRequired}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${inquiry.fullName}</p>
        <p><strong>Company:</strong> ${inquiry.companyName || 'N/A'}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Phone:</strong> ${inquiry.phone}</p>
        <p><strong>Service:</strong> ${inquiry.serviceRequired}</p>
        <p><strong>License Type:</strong> ${inquiry.licenseType}</p>
        <p><strong>Message:</strong> ${inquiry.message || 'N/A'}</p>
        <p><strong>Submitted:</strong> ${new Date(inquiry.createdAt).toLocaleString()}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');
  } catch (error) {
    console.error('❌ Email sending failed:', error);
  }
};

module.exports = { sendInquiryEmail };
