const express = require('express');
const router = express.Router();

const products = require('../data/products')

router.get('/', (req, res) => {
  res.send(products)
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const newProduct = products.find(product => product.id === Number(id))
  res.json(newProduct)
})

module.exports = router