const _jobTitle = require("../../data-access/job-title");

async function index(_, res) {
  const jobTitles = await _jobTitle.allJobTitles();
  res.send({ jobTitles });
}

async function show(req, res) {
  const jobTitle = await _jobTitle.singleJobTitle(+req.params.id);
  res.send({ jobTitle });
}

async function create(req, res) {
  const newJobTitle = await _jobTitle.createJobTitle(req.body);
  res.send({ jobTitle: newJobTitle });
}

async function update(req, res) {
  const updatedJobTitle = await _jobTitle.updateJobTitle(
    +req.params.id,
    req.body
  );
  res.send({ jobTitle: updatedJobTitle });
}

module.exports = { create, index, update, show };
