const express = require("express");
const router = require("./routes/createRoutes");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/create", router);

app.listen(8080, () => {
  console.log("listening on https://localhost/8080");
});
