const {
  addProductDb,
  getProductsDb,
  deleteProductDb,
} = require('../modules/productsModule');

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
  const dataDb = await addProductDb(image_url, title, description, price);
  if (dataDb === false) {
    console.log('no data from database');
    res.status(400).send(false);
    return;
  }
  console.log(dataDb);
  res.status(200).send(dataDb);
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const dataDb = await deleteProductDb(id);
  if (dataDb === false) {
    console.log('no data from database');
    res.status(400).send(false);
    return;
  }
  console.log(dataDb);
  res.status(200).send(dataDb);
}

module.exports = { getAllProducts, postProduct, deleteProduct };
