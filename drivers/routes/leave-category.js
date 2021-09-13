const express = require("express");
const categoryController = require("../controllers/leave-category");

const router = express.Router();
router
  .post("/", categoryController.create)
  .get("/", categoryController.index)
  .patch("/:id", categoryController.update)
  .delete("/:id", categoryController.drop);

module.exports = router;
