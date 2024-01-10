const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
  connectionString:
    "postgres://todoappdatabase_user:86NegNcGMLrhyatSuN8OlnAKZ8M6fhEQ@dpg-cmbofe6d3nmc73ektfdg-a.oregon-postgres.render.com/todoappdatabase",
  ssl: true,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;

