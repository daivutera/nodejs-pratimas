const dbConfig = require('../Config');
const mysql = require('mysql2/promise');

async function getProductsDb() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log(connection);
    const sql = 'SELECT * FROM products';
    const [result] = await connection.query(sql);
    await connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = getProductsDb;
