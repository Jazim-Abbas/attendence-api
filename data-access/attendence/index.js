const attendenceModel = require("../../models/attendence");
const attendenceDb = require("../../db/attendence");

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

module.exports = { createAttendence };
