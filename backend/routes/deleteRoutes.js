const express = require("express");
const router = express.Router();
const { deleteSubscriptions } = require("../controllers/deleteControllers");

// router.get("/", [], createResource);
router.delete("/subscription/:id", [], deleteSubscriptions);

module.exports = router;
