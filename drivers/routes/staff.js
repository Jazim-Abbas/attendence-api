const express = require("express");
const staffController = require("../controllers/staff");
const upload = require("../../utils/upload");
const isAuth = require("../middlewares/is-auth");

const router = express.Router();
router
  .post("/", staffController.create)
  .get("/", isAuth, staffController.index)
  .get("/view-leave-status/:id", isAuth, staffController.viewLeaveStatus)
  .get("/attendence/:deptId", isAuth, staffController.staffMembersForAttendence)
  .get("/department/:deptId", isAuth, staffController.deptStaffMembers)
  .get("/:id", isAuth, staffController.show)
  .patch(
    "/:id/avatar",
    isAuth,
    upload.single("avatar"),
    staffController.uploadImage
  )
  .patch("/:id", isAuth, staffController.update)
  .delete("/:id", isAuth, staffController.drop);

module.exports = router;
