const express = require("express");
const router = express.Router();
const { getSubscriptions } = require("../controllers/getControllers");

// router.get("/", [], createResource);
router.get("/subscriptions", [], getSubscriptions);

module.exports = router;
