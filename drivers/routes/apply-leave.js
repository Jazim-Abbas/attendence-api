const express = require("express");
const applyLeaveController = require("../controllers/apply-leave");

const router = express.Router();
router
  .post("/", applyLeaveController.create)
  .patch("/:id/status", applyLeaveController.updateLeaveStatus);

module.exports = router;
