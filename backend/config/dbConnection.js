const mongoose = require("mongoose");
require("dotenv").config();

const connectDb = async () => {
  mongoose
    .connect(process.env.DATABASE, {})
    .then(() => {
      console.log("Database Connected!");
    })
    .catch((err) => console.log("DB CONNECTION ERROR", err));
};

module.exports = connectDb;
