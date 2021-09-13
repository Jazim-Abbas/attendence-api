const jobTitle = require("../../models/job-title");
const jobTitleDb = require("../../db/job-title");

async function allJobTitles() {
  return jobTitleDb.allJobTitles();
}

async function createJobTitle(jobTitleFields) {
  const _jobTitle = await jobTitle.makeOrUpdateJobTitle({ ...jobTitleFields });
  const newJobTitle = {
    name: _jobTitle.getJobTitle(),
    allowedLeaves: _jobTitle.getAllowedLeaves(),
  };

  return jobTitleDb.createJobTile(newJobTitle);
}

async function updateJobTitle(id, jobTitleFields) {
  const _jobTitle = await jobTitle.makeOrUpdateJobTitle({ ...jobTitleFields });
  const updatedJobTitle = {
    name: _jobTitle.getJobTitle(),
    allowedLeaves: _jobTitle.getAllowedLeaves(),
  };

  return jobTitleDb.updateJobTitle(id, updatedJobTitle);
}

module.exports = { createJobTitle, allJobTitles, updateJobTitle };
