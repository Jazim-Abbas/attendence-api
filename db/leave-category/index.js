const queryRun = require("../run-query.util");

async function allLeaveCategories() {
  return queryRun(async (client) => {
    const leaveCategories = await client.query("SELECT * FROM leave_category");
    return leaveCategories.rows;
  });
}

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

module.exports = { createCategory, allLeaveCategories };
