const { Pool } = require("pg");

function init() {
  const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345",
    port: 5432,
  });

  return {
    getClient: () => pool,
  };
}

const getClient = init();
/** @type {Pool} */
const client = getClient();

module.exports = client;
