const jobTitle = require("../../models/job-title");
const jobTitleDb = require("../../db/job-title");

async function createJobTitle(jobTitleFields) {
  const _jobTitle = await jobTitle.makeOrUpdateJobTitle({ ...jobTitleFields });
  const newJobTitle = {
    name: _jobTitle.getJobTitle(),
    allowed_leaves: _jobTitle.getAllowedLeaves(),
  };

  return jobTitleDb.createJobTile(newJobTitle);
}

module.exports = { createJobTitle };
