const { Product } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      throw Error("No product with this ID found");
    }

    res.status(200).json({ product });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
