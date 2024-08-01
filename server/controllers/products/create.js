const { Product } = require("../../models");

module.exports = async (req, res) => {
  const { body } = req;
  if (!body) {
    throw error(400, "Must provide a body");
  }

  const {
    category,
    gender,
    name,
    brand,
    sizes,
    images,
    price,
    oldPrice,
    isNew,
    onSale,
    popular,
    inCart,
    favorite,
    partOfOutfit,
  } = req.body;

  try {
    const newProduct = await Product.create({
      category,
      gender,
      name,
      brand,
      sizes,
      images,
      price,
      oldPrice,
      new: isNew,
      onSale,
      popular,
      inCart,
      favorite,
      partOfOutfit,
    });

    res
      .status(200)
      .json({ message: `New products added in ${category}`, newProduct });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
