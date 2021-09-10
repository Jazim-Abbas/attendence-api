const jobTitle = require("../../models/job-title");

async function createJobTitle(jobTitleFields) {
  const _jobTitle = await jobTitle.makeOrUpdateJobTitle({ ...jobTitleFields });

  return _jobTitle;
}

module.exports = { createJobTitle };
