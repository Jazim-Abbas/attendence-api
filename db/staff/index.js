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

module.exports = { createStaff };
