const express = require("express");
const deptController = require("../controllers/department");

const router = express.Router();
router
  .post("/", deptController.create)
  .get("/", deptController.index)
  .get("/:id", deptController.show)
  .patch("/:id", deptController.update)
  .delete("/:id", deptController.drop);

module.exports = router;
