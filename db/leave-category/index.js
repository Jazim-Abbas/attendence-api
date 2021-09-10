const queryRun = require("../run-query.util");

async function allCategories() {
  return queryRun(async (client) => {
    const leaveCategories = await client.query("SELECT * FROM leave_category");
    return leaveCategories.rows;
  });
}

async function singleCategory(id) {
  return queryRun(async (client) => {
    const leaveCategory = await client.query(
      "SELECT * FROM leave_category where id = $1",
      [id]
    );
    return leaveCategory.rows[0];
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

async function updateCategory(id, { name }) {
  try {
    return await queryRun(async (client) => {
      const leaveCategory = await client.query(
        `
            UPDATE leave_category 
                SET name = COALESCE($1, name)
            WHERE id = $2
            RETURNING *
        `,
        [name, id]
      );

      return leaveCategory.rows[0];
    });
  } catch (err) {
    throw err;
  }
}

async function deleteCategory(id) {
  try {
    return await queryRun(async (client) => {
      const deletedCategory = await client.query(
        "DELETE FROM leave_category WHERE id = $1 RETURNING *",
        [id]
      );

      return deletedCategory.rowCount;
    });
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createCategory,
  allCategories,
  singleCategory,
  updateCategory,
  deleteCategory,
};
