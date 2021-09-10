const queryRun = require("../run-query.util");

async function createCategory({ name }) {
  try {
    return await queryRun(async (client) => {
      const leaveCategory = await client.query(
        "INSERT INTO leave_category (name) VALUES($1) RETURNING *",
        [name]
      );

      return leaveCategory.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

module.exports = { createCategory };
