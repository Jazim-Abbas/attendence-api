const queryRun = require("../run-query.util");
const Exceptions = require("../../utils/custom-exceptions");

async function dailyAttendenceStatsForStaff(staffId) {
  return queryRun(async (client) => {
    const jobTitles = await client.query(
      `
        SELECT 
          time_in::TIME - '9:30 AM'::TIME AS checkin_late_time,
          '5:30 PM'::TIME - time_out::TIME AS eary_exit_time,
          time_out::TIME - '6:00 PM'::TIME AS over_time,
          time_in,
          time_out,
          date_created
        FROM attendence
        WHERE 
          staff = $1 AND
          date_created = CURRENT_DATE
      `,
      [staffId]
    );
    return jobTitles.rows;
  });
}

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

async function markedLeaveOrAbsent({ staff, leaveStatus }) {
  try {
    return await queryRun(async (client) => {
      const todayAttendence = await client.query(
        `
          SELECT count(*) FROM attendence
          WHERE date_created = current_date AND staff = $1
      `,
        [staff]
      );

      if (todayAttendence.rows[0].count > 0) {
        throw new Exceptions.BadRequest({ message: "Already marked" });
      }

      const attendence = await client.query(
        `
            INSERT INTO attendence (staff, status, date_created) VALUES ($1, $2, $3) RETURNING *
        `,
        [staff, leaveStatus, new Date()]
      );

      return attendence.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
    throw err;
  }
}

async function updateAttendence({ timeOut, staff }) {
  try {
    return await queryRun(async (client) => {
      const attendenceInDb = await client.query(
        `
          SELECT * FROM attendence
          WHERE date_created = current_date
            AND staff = $1
        `,
        [staff]
      );

      console.log("record: ", attendenceInDb.rows);

      if (attendenceInDb.rows.length > 0 && attendenceInDb.rows[0].time_out) {
        throw new Exceptions.BadRequest({ message: "Already marked" });
      }

      const attendence = await client.query(
        `
            UPDATE attendence
                SET time_out = $1, status = 'PRESENT'
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
    throw err;
  }
}

module.exports = {
  createAttendence,
  updateAttendence,
  markedLeaveOrAbsent,
  dailyAttendenceStatsForStaff,
};
