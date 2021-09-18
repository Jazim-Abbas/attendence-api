const queryRun = require("../run-query.util");

async function allApplyLeaves() {
  return queryRun(async (client) => {
    const applyLeaves = await client.query(
      `
        SELECT 
          al.id,
          al.subject,
          al.description,
          al.from,
          al.to,
          al.leave_status,
          concat(s.first_name, ' ', s.last_name) AS staff_name,
          s.id as staff_id,
          lc.name AS category
        FROM apply_leave al
        JOIN staff s
          ON s.id = al.staff
        JOIN leave_category lc
          ON lc.id = al.leave_category
      `
    );
    return applyLeaves.rows;
  });
}

async function allApplyLeavesForStaff(staffId) {
  return queryRun(async (client) => {
    const applyLeaves = await client.query(
      `
        SELECT al.*, lc.name AS category
        FROM apply_leave al
        JOIN leave_category lc
          ON lc.id = al.leave_category
        WHERE staff = $1
      `,
      [staffId]
    );
    return applyLeaves.rows;
  });
}

async function createApplyLeave({
  subject,
  description,
  from,
  to,
  leaveCategory,
  staff,
  leaveStatus,
}) {
  try {
    return await queryRun(async (client) => {
      const applyLeave = await client.query(
        `
            INSERT INTO 
            apply_leave (subject, description, "from", "to", leave_category, staff, leave_status) 
            VALUES($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *
        `,
        [subject, description, from, to, leaveCategory, staff, leaveStatus]
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

module.exports = {
  createApplyLeave,
  updateLeaveStatus,
  allApplyLeaves,
  allApplyLeavesForStaff,
};
