const express = require("express");
const jobTitleRoutes = require("./job-title");
const deptRoutes = require("./department");
const leaveCategRoutes = require("./leave-category");

const router = express.Router();
router.use("/job-title", jobTitleRoutes);
router.use("/department", deptRoutes);
router.use("/leave-category", leaveCategRoutes);

module.exports = router;
