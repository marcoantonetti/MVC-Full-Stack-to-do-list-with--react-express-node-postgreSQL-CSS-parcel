const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  connectionString: 'postgres://USER:PASSWORD@EXTERNAL_HOST:PORT/DATABASE',
  user: process.env.USER ?? "postgres", // my user
  password: process.env.PASSWORD ?? "jugodeub4", // my password
  host: process.env.HOST ?? "postgres://USER:PASSWORD@EXTERNAL_HOST:PORT/DATABASE",
  port: process.env.PORT ?? 5432,
  database: process.env.DATABASE ?? "todoAppDatabase",
});

module.exports = pool;
