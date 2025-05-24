require("dotenv").config();

const serverPort = process.env.PORT;
const mongoDBUrl = process.env.MONGODB_URL;

const jwtSecret = process.env.JWT_SECRET_KEY;

const nodeEnv = process.env.NODE_ENV;

const smtpUsername = process.env.SMTP_USERNAME;
const smtpPassword = process.env.SMTP_PASSWORD;

const clientURL = process.env.CLIENT_URL;

module.exports = {
  serverPort,
  mongoDBUrl,
  jwtSecret,
  nodeEnv,
  smtpUsername,
  smtpPassword,
  clientURL,
};
