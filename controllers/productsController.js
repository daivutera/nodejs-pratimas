const { addProductDb, getProductsDb } = require('../modules/productsModule');

async function getAllProducts(req, res) {
  const dataDb = await getProductsDb();
  if (dataDb === false) {
    console.log('no data from database');
    res.status(400).send(false);
    return;
  }
  console.log(dataDb);
  res.status(200).send(dataDb);
}

async function postProduct(req, res) {
  const { image_url, title, description, price } = req.body;
  console.log('======================', image_url, title, description, price);
  const dataDb = await addProductDb(image_url, title, description, price);
  if (dataDb === false) {
    console.log('no data from database');
    res.status(400).send(false);
    return;
  }
  console.log(dataDb);
  res.status(200).send(dataDb);
}

module.exports = { getAllProducts, postProduct };
