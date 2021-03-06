const pool = require("./client");

async function queryRun(callback) {
  // const client = await pool.connect();
  // try {
  //   return await callback(client);
  // } catch (err) {
  //   client.release();
  //   console.log("db error: ", err);
  //   throw err;
  // } finally {
  //   client.release();
  //   console.log("release the pool");
  // }

  return (async () => {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");
      const record = await callback(client);
      await client.query("COMMIT");
      return record;
    } catch (err) {
      await client.query("ROLLBACK");
      throw err;
    } finally {
      client.release();
    }
  })().catch((err) => {
    throw err;
  });
}

module.exports = queryRun;
