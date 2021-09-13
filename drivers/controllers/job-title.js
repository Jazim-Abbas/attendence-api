const jobTitle = require("../../data-access/job-title");

async function index(_, res) {
  const jobTitles = await jobTitle.allJobTitles();
  res.send({ jobTitles });
}

async function create(req, res) {
  const newJobTitle = await jobTitle.createJobTitle(req.body);
  res.send({ jobTitle: newJobTitle });
}

async function update(req, res) {
  const updatedJobTitle = await jobTitle.updateJobTitle(
    +req.params.id,
    req.body
  );
  res.send({ jobTitle: updatedJobTitle });
}

module.exports = { create, index, update };
