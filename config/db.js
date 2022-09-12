const mongoose = require("mongoose");
const config = require("config");
const DB = config.get("mongoURL");

const connectDB = async () => {
  try {
    mongoose.connect(DB);
    console.log("Mongo DB connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
