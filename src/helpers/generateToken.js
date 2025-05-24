const jwt = require("jsonwebtoken");
const { jwtSecret, nodeEnv } = require("../secret");

const createToken = (userId, expiresIn) => {
  const token = jwt.sign({ userId }, jwtSecret, { expiresIn: expiresIn });

  return token;
};

module.exports = createToken;
