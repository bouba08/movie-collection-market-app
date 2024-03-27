const Product = require('../models/Product');

// Controller to create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const seller = req.user._id; // Assuming you have user authentication middleware

    const product = new Product({ name, description, price, seller });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller to get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('seller', 'username'); // Populate seller details
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate('seller', 'username'); // Populate seller details
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    await product.remove();
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
