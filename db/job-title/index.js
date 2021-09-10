const queryRun = require("../run-query.util");

async function allJobTitles() {
  return queryRun(async (client) => {
    const jobTitles = await client.query("SELECT * FROM job_title");
    return jobTitles.rows;
  });
}

async function singleJobTitle(id) {
  return queryRun(async (client) => {
    const jobTitle = await client.query(
      "SELECT * FROM job_title where id = $1",
      [id]
    );
    return jobTitle.rows[0];
  });
}

async function createJobTile({ name, allowedLeaves = 2 } = {}) {
  try {
    return await queryRun(async (client) => {
      const jobTitle = await client.query(
        "INSERT INTO job_title (name, allowed_leaves) VALUES($1, $2) RETURNING *",
        [name, allowedLeaves]
      );

      return jobTitle.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

async function updateJobTitle(id, { name, allowedLeaves }) {
  try {
    return await queryRun(async (client) => {
      const jobTitle = await client.query(
        `
            UPDATE job_title 
                SET name = COALESCE($1, name), allowed_leaves = COALESCE($2, allowed_leaves)
            WHERE id = $3
        `,
        [name, allowedLeaves, id]
      );

      return jobTitle.rows[0];
    });
  } catch (err) {
    console.log("error: ", err);
  }
}

module.exports = {
  createJobTile,
  allJobTitles,
  singleJobTitle,
  updateJobTitle,
};
