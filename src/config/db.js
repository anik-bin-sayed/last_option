const mongoose = require("mongoose");
const { mongoDBUrl } = require("../secret");

const connectToDB = async () => {
  try {
    const connect = await mongoose.connect(mongoDBUrl);
    console.log(`Mongodb connected successfully `);
  } catch (err) {
    console.log(`Error:${err.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;
