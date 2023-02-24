const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL);
    console.log("Successfully connected to the DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
