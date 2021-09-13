const express = require("express");
const staffController = require("../controllers/staff");

const router = express.Router();
router
  .post("/", staffController.create)
  .get("/", staffController.index)
  .get("/:id", staffController.show)
  .patch("/:id", staffController.update);

module.exports = router;
