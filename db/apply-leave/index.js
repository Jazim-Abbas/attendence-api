const queryRun = require("../run-query.util");

async function createApplyLeave({
  subject,
  description,
  from,
  to,
  leaveCategory,
  staff,
}) {
  try {
    return await queryRun(async (client) => {
      const applyLeave = await client.query(
        `
            INSERT INTO 
            apply_leave (subject, description, "from", "to", leave_category, staff) 
            VALUES($1, $2, $3, $4, $5, $6) 
            RETURNING *
        `,
        [subject, description, from, to, leaveCategory, staff]
      );

      return applyLeave.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

async function updateLeaveStatus(id, { leaveStatus }) {
  try {
    return await queryRun(async (client) => {
      const applyLeave = await client.query(
        `
            UPDATE apply_leave 
                SET leave_status = $1
            WHERE id = $2
            RETURNING *
        `,
        [leaveStatus, id]
      );

      return applyLeave.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

module.exports = { createApplyLeave, updateLeaveStatus };
