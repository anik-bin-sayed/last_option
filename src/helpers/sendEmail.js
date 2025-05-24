const sendEmailWithNodemailer = require("./email");

const sendEmail = async (emailData) => {
  try {
    await sendEmailWithNodemailer(emailData);
  } catch (error) {
    throw new Error("Failed to send email");
  }
};

module.exports = sendEmail;
