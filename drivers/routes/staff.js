const express = require("express");
const staffRoutes = require("../controllers/staff");

const router = express.Router();
router.post("/", staffRoutes.create);

module.exports = router;
