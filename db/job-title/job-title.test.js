const jobTitle = require("./index");
const client = require("../client");

afterAll(async () => {
  await _deleteAll();
});

describe("job-title-db", () => {
  test("should get all job title from db", async () => {
    expect.assertions(1);

    await jobTitle.createJobTile({ name: "abc", allowedLeaves: 1 });
    const result = await jobTitle.allJobTitles();

    expect(result.length).toEqual(1);
  });

  test("should create job title in db", async () => {
    expect.assertions(1);

    try {
      const record = await jobTitle.createJobTile({
        name: "abc",
        allowedLeaves: 1,
      });
      console.log(record);

      expect(record.name).toEqual("abc");
      expect(record.allowed_leaves).toEqual(1);
    } catch (_) {
      console.log(_);
    }
  });
});

async function _deleteAll() {
  await client.query("DELETE FROM job_title");
}
