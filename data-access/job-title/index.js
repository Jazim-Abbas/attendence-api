const jobTitle = require("../../models/job-title");
const jobTitleDb = require("../../db/job-title");
const Exceptions = require("../../utils/custom-exceptions");

async function allJobTitles() {
  return jobTitleDb.allJobTitles();
}

async function singleJobTitle(id) {
  return jobTitleDb.singleJobTitle(id);
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

async function deleteJobTitle(id) {
  const deleteCount = await jobTitleDb.deleteJobTitle(id);
  if (deleteCount === 0) {
    throw new Exceptions.NotFound({ message: "Job title is not found" });
  }
}

module.exports = {
  createJobTitle,
  allJobTitles,
  updateJobTitle,
  singleJobTitle,
  deleteJobTitle,
};
