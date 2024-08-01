const { Product } = require("../../models");

module.exports = async (req, res) => {
  try {
    const products = await Product.find({ inCart: true });
    const prices = products.map((product) => product.price);
    if (!products) {
      res.status(201).json({ message: "No products in cart" });
    }
    res.status(200).json({ count: products.length, prices, products });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: error.message });
  }
};
