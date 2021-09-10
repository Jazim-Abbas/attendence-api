const jobTitle = require("../../data-access/job-title");

async function create(req, res) {
  const newJobTitle = await jobTitle.createJobTitle(req.body);

  res.send({ jobTitle: newJobTitle });
}

module.exports = { create };
