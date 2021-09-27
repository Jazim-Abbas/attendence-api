const queryRun = require("../run-query.util");
const Exceptions = require("../../utils/custom-exceptions");

async function allStaffMembers(excludedStaffId) {
  return await queryRun(async (client) => {
    const staffMembers = await client.query(
      `
        SELECT 
          s.id,
          CONCAT(s.first_name, ' ', s.last_name),
          s.email,
          d.name AS department,
          jt.name AS job_title
        FROM staff s
        LEFT JOIN department d
          ON s.department = d.id
        LEFT JOIN job_title jt
          ON s.job_title = jt.id
        WHERE s.id <> $1
      `,
      [excludedStaffId]
    );
    return staffMembers.rows;
  });
}

async function staffMembersForDept(deptId) {
  return await queryRun(async (client) => {
    const staffMembers = await client.query(
      "SELECT * FROM staff WHERE department = $1",
      [deptId]
    );
    return staffMembers.rows;
  });
}

async function singleStaff(id) {
  return await queryRun(async (client) => {
    const staffMembers = await client.query(
      "SELECT * FROM staff WHERE id = $1",
      [id]
    );
    return staffMembers.rows[0];
  });
}

async function viewLeaveStatus(staffId) {
  return await queryRun(async (client) => {
    const leaveStatus = await client.query(
      `
        SELECT 
          s.first_name, 
          s.last_name, 
          s.id AS staff_id,
          COALESCE(jt.allowed_leaves, 0) as allowed_leaves,
          (
            SELECT COUNT(*) 
            FROM attendence att
            WHERE 
              att.staff = $1
              AND
              (
                EXTRACT(YEAR FROM date_created) = EXTRACT(YEAR FROM NOW())
                AND
                EXTRACT(MONTH FROM date_created) = EXTRACT(MONTH FROM NOW())
              )
              AND att.status = 'LEAVE'
          ) AS leaves
        FROM staff s
        LEFT JOIN job_title jt
          ON s.job_title = jt.id
        WHERE s.id = $1
      `,
      [staffId]
    );
    return leaveStatus.rows[0];
  });
}

async function allStaffForTodayAttendence(deptId) {
  return await queryRun(async (client) => {
    const leaveMembers = await client.query(
      `
      SELECT 
        s.id AS staff_id,
        CONCAT
        (
          s.first_name,
          ' ',
          s.last_name,
          ' (L)'
        ) AS staff_name
      FROM staff s
      JOIN apply_leave al
        ON s.id = al.staff 
      WHERE 
        (CURRENT_DATE BETWEEN al.from AND al.to)
        AND
        al.leave_status = 'ACCEPTED'
        AND s.department = $1
      `,
      [deptId]
    );
    const allStaffMembers = await client.query(
      `
        SELECT 
          s.id AS staff_id,
          CONCAT(s.first_name, ' ', s.last_name) AS staff_name
        FROM staff s
        WHERE department = $1
      `,
      [deptId]
    );
    const markedStatusMembers = await client.query(
      `
        SELECT 
          s.id AS staff_id,
          CONCAT(s.first_name, ' ', s.last_name) AS staff_name
        FROM attendence a
        JOIN staff s
          ON a.staff = s.id 
        WHERE 
          a.date_created = CURRENT_DATE
          AND
          status IS NOT NULL
          AND 
          s.department = $1
      `,
      [deptId]
    );

    let staffMembers = {};
    let actualMembers = [];
    let obj = {};
    allStaffMembers.rows.forEach((member) => {
      staffMembers[member.staff_id] = member;
    });
    leaveMembers.rows.forEach((member) => {
      staffMembers[member.staff_id] = member;
    });
    markedStatusMembers.rows.forEach((member) => {
      obj[member.staff_id] = member;
    });
    Object.keys(obj).forEach((key) => {
      console.log("key: ", key);
      if (!staffMembers[key]) {
        actualMembers.push(obj[key]);
      }

      if (staffMembers[key]) {
        delete staffMembers[key];
      }
    });

    Object.keys(staffMembers).forEach((key) => {
      actualMembers.push(staffMembers[key]);
    });

    return actualMembers;
    return { staffMembers, obj, actualMembers };

    // return staffMembers.rows;
  });
}

async function createStaff({
  firstName,
  lastName,
  email,
  password,
  gender,
  dob,
  phoneNo,
  joiningDate,
  address,
  department,
  jobTitle,
}) {
  try {
    return await queryRun(async (client) => {
      const staff = await client.query(
        `
            INSERT INTO 
            staff (first_name, last_name, email, password, gender, dob, phone, joining_date, address, department, job_title) 
            VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) 
            RETURNING *
        `,
        [
          firstName,
          lastName,
          email,
          password,
          gender,
          dob,
          phoneNo,
          joiningDate,
          address,
          department,
          jobTitle,
        ]
      );

      return staff.rows[0];
    });
  } catch (err) {
    throw new Exceptions.BadRequest({ message: "Email already exists" });
  }
}

async function updateStaff(
  id,
  {
    firstName,
    lastName,
    email,
    gender,
    dob,
    phoneNo,
    joiningDate,
    address,
    department,
    jobTitle,
  }
) {
  try {
    return await queryRun(async (client) => {
      const staff = await client.query(
        `
            UPDATE staff 
            SET 
                first_name = COALESCE($1, first_name), 
                last_name = COALESCE($2, last_name),
                email = COALESCE($3, email),
                gender = COALESCE($4, gender),
                dob = COALESCE($5, dob),
                phone = COALESCE($6, phone),
                joining_date = COALESCE($7, joining_date),
                address = COALESCE($8, address),
                department = COALESCE($9, department),
                job_title = COALESCE($10, job_title)
            WHERE id = $11
            RETURNING *
        `,
        [
          firstName,
          lastName,
          email,
          gender,
          dob,
          phoneNo,
          joiningDate,
          address,
          department,
          jobTitle,
          id,
        ]
      );

      return staff.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

async function uploadAvatar(id, { imagePath }) {
  try {
    return await queryRun(async (client) => {
      const staff = await client.query(
        `
            UPDATE staff 
                SET image = COALESCE($1, image)
            WHERE id = $2
        `,
        [imagePath, id]
      );

      return staff.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

async function deleteStaff(id) {
  return await queryRun(async (client) => {
    const deletedRecord = await client.query(
      "DELETE FROM staff WHERE id = $1 RETURNING *",
      [id]
    );

    return deletedRecord.rowCount;
  });
}

module.exports = {
  createStaff,
  updateStaff,
  deleteStaff,
  allStaffForTodayAttendence,
  allStaffMembers,
  singleStaff,
  staffMembersForDept,
  uploadAvatar,
  viewLeaveStatus,
};
