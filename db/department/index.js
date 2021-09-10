const queryRun = require("../run-query.util");

async function allDepartments() {
  return queryRun(async (client) => {
    const departments = await client.query("SELECT * FROM department");
    return departments.rows;
  });
}

async function singleDepartment(id) {
  return queryRun(async (client) => {
    const department = await client.query(
      "SELECT * FROM department where id = $1",
      [id]
    );
    return department.rows[0];
  });
}

async function createDepartment({ name, phone, email, address }) {
  try {
    return await queryRun(async (client) => {
      const newDepartment = await client.query(
        `
            INSERT INTO 
                department (name, phone, email, address) 
                VALUES($1, $2, $3, $4) 
            RETURNING *
        `,
        [name, phone, email, address]
      );

      return newDepartment.rows[0];
    });
  } catch (err) {
    throw err;
  }
}

async function updateDepartment(id, { name, phone, email, address }) {
  try {
    return await queryRun(async (client) => {
      const department = await client.query(
        `
            UPDATE department 
                SET 
                    name        = COALESCE($1, name), 
                    phone       = COALESCE($2, phone),
                    email       = COALESCE($3, email),
                    address     = COALESCE($4, address)
            WHERE id = $5
            RETURNING *
        `,
        [name, phone, email, address, id]
      );

      return department.rows[0];
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createDepartment,
  allDepartments,
  singleDepartment,
  updateDepartment,
};
