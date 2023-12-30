require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const createRouter = require("./routes/createRoutes");
const getRouter = require("./routes/getRoutes");

const app = express();

mongoose
  .connect(process.env.DATABASE, {})
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch((err) => console.log("DB CONNECTION ERR", err));

app.use(cors());
app.use(express.json());
app.use("/api/create", createRouter);
app.use("/api/get", getRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("listening on port: ", port);
});
