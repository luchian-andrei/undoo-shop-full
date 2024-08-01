const { Product } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { favorite, inCart } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(id, { inCart, favorite });
    if (!product) {
      throw Error("No product with this ID found");
    }

    res.status(200).json({ message: "Product updated", product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
