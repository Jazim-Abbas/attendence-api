const queryRun = require("../run-query.util");

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

module.exports = { createDepartment };
