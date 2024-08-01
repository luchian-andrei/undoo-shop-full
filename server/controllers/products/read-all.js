const { Product } = require("../../models");

module.exports = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
