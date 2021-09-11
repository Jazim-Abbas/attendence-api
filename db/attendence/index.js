const queryRun = require("../run-query.util");

async function createAttendence({ timeIn, staff }) {
  try {
    return await queryRun(async (client) => {
      const todayAttendence = await client.query(
        `
            SELECT count(id) FROM attendence
            WHERE 
                date_created = current_date
                AND 
                staff = $1
        `,
        [staff]
      );

      if (todayAttendence.rows[0].count > 0) {
        throw new Error("Attendence is already marked");
      }

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

async function updateAttendence({ timeOut, staff }) {
  try {
    return await queryRun(async (client) => {
      const attendence = await client.query(
        `
            UPDATE attendence 
                SET time_out = $1
            WHERE 
                date_created = current_date
                AND 
                staff = $2
            RETURNING *
        `,
        [timeOut, staff]
      );

      return attendence.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

module.exports = { createAttendence, updateAttendence };
