const express = require("express");
const router = express.Router();
const {
  createResource,
  createSubscription,
} = require("../controllers/createControllers");

router.post("/", [], createResource);
router.post("/subscription", [], createSubscription);

module.exports = router;
