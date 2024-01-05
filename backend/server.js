const express = require("express");
const cors = require("cors");

const createRouter = require("./routes/createRoutes");
const getRouter = require("./routes/getRoutes");
const connectDb = require("./config/dbConnection");

connectDb();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/create", createRouter);
app.use("/api/get", getRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("listening on port: ", port);
});
