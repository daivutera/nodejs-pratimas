const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(cors());

app.get('/', function (req, res) {
  res.send('nice try');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
