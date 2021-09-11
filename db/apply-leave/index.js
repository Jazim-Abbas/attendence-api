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

module.exports = { createApplyLeave };
