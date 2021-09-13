const express = require("express");
const jobTitleController = require("../controllers/job-title");

const router = express.Router();
router
  .post("/", jobTitleController.create)
  .get("/", jobTitleController.index)
  .get("/:id", jobTitleController.show)
  .patch("/:id", jobTitleController.update)
  .delete("/:id", jobTitleController.drop);

module.exports = router;
