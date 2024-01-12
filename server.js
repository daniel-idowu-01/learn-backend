const express = require('express');
const products = require('./data/products')

const app = express();

app.get('/api/products', (req, res) => {
  res.send(products)
})

app.listen(5000, () => {
  console.log('Server is listening at port 5000')
})