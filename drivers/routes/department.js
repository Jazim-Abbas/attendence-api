const express = require("express");
const deptController = require("../controllers/department");

const router = express.Router();
router.post("/", deptController.create);

module.exports = router;
