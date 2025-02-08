const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'autoworkshop_inventory'
});

module.exports = pool.promise(); // Promisified for async/await usage
