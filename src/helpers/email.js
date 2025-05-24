const nodemailer = require("nodemailer");
const { smtpUsername, smtpPassword } = require("../secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const sendEmailWithNodemailer = async (emailData) => {
  try {
    const mailOption = {
      from: smtpUsername,
      to: emailData.email,
      subject: emailData.subject,
      html: emailData.html,
    };
    const info = await transporter.sendMail(mailOption);
    console.log("Message was sent : %s", info.response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmailWithNodemailer;
