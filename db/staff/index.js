const queryRun = require("../run-query.util");

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
    console.log("email arleady exists: ", err);
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

module.exports = { createStaff, updateStaff };
