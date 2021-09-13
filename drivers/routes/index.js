const express = require("express");
const jobTitleRoutes = require("./job-title");
const deptRoutes = require("./department");
const leaveCategRoutes = require("./leave-category");
const applyLeaveRoutes = require("./apply-leave");
const staffRoutes = require("./staff");

const router = express.Router();
router.use("/job-title", jobTitleRoutes);
router.use("/department", deptRoutes);
router.use("/leave-category", leaveCategRoutes);
router.use("/apply-leave", applyLeaveRoutes);
router.use("/staff", staffRoutes);

module.exports = router;
