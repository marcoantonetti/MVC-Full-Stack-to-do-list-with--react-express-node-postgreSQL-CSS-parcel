const Pool = require("pg").Pool;
require("dotenv").config();

// Postgres database communication
const pool = new Pool({
    connectionString: 'postgres://USER:PASSWORD@EXTERNAL_HOST:PORT/DATABASE',
    ssl: true,
});

module.exports = pool;