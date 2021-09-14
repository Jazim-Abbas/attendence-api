const queryRun = require("../run-query.util");

async function findByEmail({ email }) {
  return queryRun(async (client) => {
    const staff = await client.query(
      `
            SELECT id, email, password, is_admin FROM staff 
            WHERE email = $1
            LIMIT 1
        `,
      [email]
    );
    return staff.rows[0];
  });
}

module.exports = { findByEmail };
