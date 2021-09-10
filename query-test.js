const jobTitle = require("./db/job-title");

async function main() {
  await jobTitleDBOperations();
}

// all db operations have completed
async function jobTitleDBOperations() {
  /**
   * create
   * */
  //   const record = await jobTitle.createJobTile({
  //     name: "Frontend Developer",
  //     allowedLeaves: 3,
  //   });
  //   console.log("saved Jobtitle: ", record);
  /**
   * all
   * */
  //   const allJobTitles = await jobTitle.allJobTitles();
  //   console.log("all jobtitles: ", allJobTitles);
  /**
   * single
   * */
  //   const singleJobTitle = await jobTitle.singleJobTitle(5);
  //   console.log("single jobtitle: ", singleJobTitle);
  /**
   * update
   * */
  //   const updatedJobTitle = await jobTitle.updateJobTitle(5, {
  //     name: "FullStack Developer",
  //     allowedLeaves: 3,
  //   });
  //   console.log("updated jobTitle: ", updatedJobTitle);
  /**
   * delete
   * */
  //   const deletedJobTitle = await jobTitle.deleteJobTitle(6);
  //   console.log("deletedJobTitle: ", deletedJobTitle);
}

main();
