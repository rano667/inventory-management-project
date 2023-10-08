const express = require('express');
const router = express.Router();
const Product = require('../model/product'); // Import the Product model

// Create a new Product
router.post('/add-product', async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = new Product({
      name,
      quantity
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.error(error); // Log the error for debugging
  }
});

// Get all products
router.get('/get-products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    console.error(error); // Log the error for debugging
  }
});

router.delete('/delete-product/:id', async (req, res) => {
    try {
      const { id } = req.params;
  
      // Use Mongoose's findByIdAndRemove method to delete the product by ID
      const deletedProduct = await Product.findByIdAndRemove(id);
  
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      // Optionally, you can fetch and return the updated list of products
      const products = await Product.find();
  
      res.status(200).json({ message: 'Product deleted successfully', products });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
      console.error(error); // Log the error for debugging
    }
  });
  

module.exports = router;
