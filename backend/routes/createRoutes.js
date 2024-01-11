const express = require("express");
const router = express.Router();

const {
  createResource,
  createSubscription,
  createUser,
} = require("../controllers/createControllers");
const { authCheck } = require("../middlwares/auth");

router.post("/", [], createResource);
router.post("/subscription", [authCheck], createSubscription);
router.post("/user", [], createUser);

module.exports = router;
