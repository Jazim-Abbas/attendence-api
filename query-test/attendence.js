const attendenceDb = require("../db/attendence");

async function main() {
  await update();
}

async function create() {
  const fields = { timeIn: "09:20", staff: 1 };
  const attendence = await attendenceDb.createAttendence({ ...fields });
  console.log("newly created attendence: ", attendence);
}

async function update() {
  const fields = { timeOut: "15:30", staff: 1 };
  const updatedAttendence = await attendenceDb.updateAttendence({ ...fields });
  console.log("updatedAttendence: ", updatedAttendence);
}

main();
