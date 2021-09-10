const pool = require("../client");
const queryRun = require("../run-query.util");

async function allJobTitles() {
  return queryRun(async (client) => {
    const jobTitles = await client.query("SELECT * FROM job_title");
    return jobTitles.rows;
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

module.exports = { createJobTile, allJobTitles };
