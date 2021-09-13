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

module.exports = { createAttendence, updateAttendence };
