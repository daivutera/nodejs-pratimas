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

async function addProductDb(image_url, title, description, price) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log(connection);
    const sql =
      'INSERT INTO products (image_url, title, description, price) VALUES(?, ?, ?, ?)';
    const [result] = await connection.execute(sql, [
      image_url,
      title,
      description,
      price,
    ]);
    await connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function deleteProductDb(id) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log(connection);
    const sql = `DELETE FROM products WHERE id=? LIMIT 1`;
    const [result] = await connection.execute(sql, [id]);
    console.log('result', result);
    await connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function totalProductsDb(id) {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log(connection);
    const sql = `SELECT COUNT(id) FROM products`;
    const [result] = await connection.query(sql);
    console.log('result', result);
    await connection.close();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = {
  getProductsDb,
  addProductDb,
  deleteProductDb,
  totalProductsDb,
};
