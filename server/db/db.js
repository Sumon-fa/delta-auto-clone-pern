const { Client } = require('pg');
const client = new Client({
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  host: 'localhost',
  port: process.env.dbport,
});
client.on('connect', () => {
  console.log('Database connected.');
});

module.exports = client;
