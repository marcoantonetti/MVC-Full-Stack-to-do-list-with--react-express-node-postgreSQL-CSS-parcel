const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  connectionString: process.env.URL ?? "postgres://todoappdatabase_user:86NegNcGMLrhyatSuN8OlnAKZ8M6fhEQ@dpg-cmbofe6d3nmc73ektfdg-a.oregon-postgres.render.com/todoappdatabase",
  ssl: { rejectUnauthorized: false },
  ssl: true,
});

module.exports = pool;
//
