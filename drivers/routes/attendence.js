const express = require("express");
const attendenceController = require("../controllers/attendence");

const router = express.Router();
router
  .get("/stats/:staffId", attendenceController.dailyAttendenceStatsForStaff)
  .post("/", attendenceController.create)
  .post("/absent", attendenceController.markedAbsent)
  .post("/leave", attendenceController.markedLeave)
  .patch("/", attendenceController.update);

module.exports = router;
