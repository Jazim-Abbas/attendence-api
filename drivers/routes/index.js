const express = require("express");
const jobTitleRoutes = require("./job-title");
const deptRoutes = require("./department");

const router = express.Router();
router.use("/job-title", jobTitleRoutes);
router.use("/department", deptRoutes);

module.exports = router;
