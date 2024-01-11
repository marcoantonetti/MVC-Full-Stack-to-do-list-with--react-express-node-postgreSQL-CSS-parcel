const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  connectionString: process.env.URL,
  ssl: { rejectUnauthorized: false },
  ssl: true,
});

module.exports = pool;

