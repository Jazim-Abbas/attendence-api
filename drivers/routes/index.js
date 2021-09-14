const express = require("express");
const jobTitleRoutes = require("./job-title");
const deptRoutes = require("./department");
const leaveCategRoutes = require("./leave-category");
const applyLeaveRoutes = require("./apply-leave");
const staffRoutes = require("./staff");
const attendenceRoutes = require("./attendence");
const authRoutes = require("./auth");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router.use("/job-title", isAuth, jobTitleRoutes);
router.use("/department", isAuth, deptRoutes);
router.use("/leave-category", isAuth, leaveCategRoutes);
router.use("/apply-leave", isAuth, applyLeaveRoutes);
router.use("/staff", staffRoutes);
router.use("/attendence", isAuth, attendenceRoutes);
router.use("/auth", authRoutes);

module.exports = router;
