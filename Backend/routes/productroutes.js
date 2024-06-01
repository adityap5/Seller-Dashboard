const express = require('express');
const router = express.Router();
const Product = require('../models/products')


router.post('/',async (req,res)=>{
    const {name, price, description, image, category, quantity, rating} = req.body;
    try {
        const product = new Product({name, price, description, image, category, quantity, rating});
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/', async (req, res) => {
    try {
      const products = await Product.find({ user: req.user });
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
      const products = await Product.findById(req.params.id);
      if (!products) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  router.delete('/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      await product.deleteOne();
      res.json({ message: 'product deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;