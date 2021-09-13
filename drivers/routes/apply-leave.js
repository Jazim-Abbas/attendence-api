const express = require("express");
const applyLeaveRoutes = require("../controllers/apply-leave");

const router = express.Router();
router.post("/", applyLeaveRoutes.create);

module.exports = router;
