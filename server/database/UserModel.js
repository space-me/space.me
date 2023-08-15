
const { Pool } = require('pg')

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});


/*
const { Pool } = require('pg');

const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',  // or your actual database host
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432,  // or your actual database port
});

// ...

*/
// We export an object that contains a property called query, a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
