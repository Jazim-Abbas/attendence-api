const express = require("express");
const categoryController = require("../controllers/leave-category");

const router = express.Router();
router.post("/", categoryController.create);

module.exports = router;
