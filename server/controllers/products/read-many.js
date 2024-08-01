const { Product } = require("../../models");

module.exports = async (req, res) => {
  const { category, gender } = req.params;

  try {
    const products = await Product.find({
      category: category[0].toUpperCase() + category.slice(1),
      gender: gender[0].toUpperCase() + gender.slice(1),
    });
    res.status(200).json({ count: products.length, products });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
