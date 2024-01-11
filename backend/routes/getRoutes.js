const express = require("express");
const router = express.Router();
const {
  getSubscriptions,
  getCurrentUser,
} = require("../controllers/getControllers");
const { authCheck } = require("../middlwares/auth");

// router.get("/", [], createResource);
router.get("/subscriptions", [], getSubscriptions);
router.get("/user", [authCheck], getCurrentUser);

module.exports = router;
