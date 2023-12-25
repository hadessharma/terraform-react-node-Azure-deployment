const express = require("express");
const router = express.Router();
const {createResource} = require("../controllers/createControllers") 

router.post('/', [], createResource);

module.exports = router;