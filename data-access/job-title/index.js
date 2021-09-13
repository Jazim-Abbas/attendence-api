const jobTitle = require("../../models/job-title");

async function createJobTitle(jobTitleFields) {
  const _jobTitle = await jobTitle.makeOrUpdateJobTitle({ ...jobTitleFields });
  const newJobTitle = {
    name: _jobTitle.getJobTitle(),
    allowed_leaves: _jobTitle.getAllowedLeaves(),
  };

  return newJobTitle;
}

module.exports = { createJobTitle };
