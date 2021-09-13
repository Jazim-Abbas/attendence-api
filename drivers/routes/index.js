const express = require("express");
const jobTitleRoutes = require("./job-title");

const router = express.Router();
router.use("/job-title", jobTitleRoutes);

module.exports = router;
