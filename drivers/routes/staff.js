const express = require("express");
const staffController = require("../controllers/staff");
const upload = require("../../utils/upload");

const router = express.Router();
router
  .post("/", staffController.create)
  .get("/", staffController.index)
  .get("/attendence", staffController.staffMembersForAttendence)
  .get("/department/:deptId", staffController.deptStaffMembers)
  .get("/:id", staffController.show)
  .patch("/:id/avatar", upload.single("avatar"), staffController.uploadImage)
  .patch("/:id", staffController.update)
  .delete("/:id", staffController.drop);

module.exports = router;
