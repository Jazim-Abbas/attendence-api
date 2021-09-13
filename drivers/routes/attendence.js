const express = require("express");
const attendenceController = require("../controllers/attendence");

const router = express.Router();
router
  .post("/", attendenceController.create)
  .patch("/", attendenceController.update);

module.exports = router;
