const attendenceModel = require("../../models/attendence");
const attendenceDb = require("../../db/attendence");

async function dailyAttendenceStatsForStaff(staffId) {
  return attendenceDb.dailyAttendenceStatsForStaff(staffId);
}

async function createAttendence(attendenceFields) {
  const attendence = await attendenceModel.createAttendence({
    ...attendenceFields,
  });
  const newAttendence = {
    timeIn: attendence.getTimein(),
    staff: attendence.getStaffId(),
  };

  return attendenceDb.createAttendence(newAttendence);
}

async function markedAbsent(staffId) {
  return attendenceDb.markedLeaveOrAbsent({
    staff: staffId,
    leaveStatus: "ABSENT",
  });
}

async function markedLeave(staffId) {
  return attendenceDb.markedLeaveOrAbsent({
    staff: staffId,
    leaveStatus: "LEAVE",
  });
}

async function updateAttendence(attendenceFields) {
  const attendence = await attendenceModel.updateAttendence({
    ...attendenceFields,
  });
  const updatedAttendence = {
    timeOut: attendence.getTimeout(),
    staff: attendence.getStaffId(),
  };

  return attendenceDb.updateAttendence(updatedAttendence);
}

module.exports = {
  createAttendence,
  updateAttendence,
  markedAbsent,
  markedLeave,
  dailyAttendenceStatsForStaff,
};
