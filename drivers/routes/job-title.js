const express = require("express");
const jobTitleController = require("../controllers/job-title");

const router = express.Router();
router.post("/", jobTitleController.create);

module.exports = router;
