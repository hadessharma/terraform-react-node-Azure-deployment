const express = require("express");
const router = require("./routes/createRoutes");

const app = express();

app.use(express.json());
app.use("/api/create", router);

app.listen(8080, () => {
    console.log("listening on https://localhost/8080")
})