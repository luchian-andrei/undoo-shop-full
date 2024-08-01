const { Product } = require("../../models");

module.exports = async (req, res) => {
  const { gender } = req.params;

  try {
    const products = await Product.find({
      gender: gender[0].toUpperCase() + gender.slice(1),
    });
    const brands = Array.from(
      new Set(products.map((product) => product.brand))
    );
    res.status(200).json({ count: brands.length, brands });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
