const express = require("express");
const router = express.Router();
const {
  createResource,
  createSubscription,
  createUser,
} = require("../controllers/createControllers");

router.post("/", [], createResource);
router.post("/subscription", [], createSubscription);
router.post("/user", [], createUser);

module.exports = router;
