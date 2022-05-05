const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const productsController = require('./controllers/productsController');
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

app.get('/', productsController.getAllProducts);
app.post('/add', productsController.postProduct);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
