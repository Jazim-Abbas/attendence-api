const express = require("express");
const attendenceController = require("../controllers/attendence");

const router = express.Router();
router.post("/", attendenceController.create);

module.exports = router;
