const queryRun = require("../run-query.util");

async function createAttendence({ timeIn, staff }) {
  try {
    return await queryRun(async (client) => {
      const attendence = await client.query(
        "INSERT INTO attendence (time_in, date_created, staff) VALUES($1, $2, $3) RETURNING *",
        [timeIn, new Date(), staff]
      );

      return attendence.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

module.exports = { createAttendence };
