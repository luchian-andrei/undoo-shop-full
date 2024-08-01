const { Product } = require("../../models");

module.exports = async (req, res) => {
  try {
    const favorites = await Product.find({ favorite: true });

    if (!favorites) {
      res.status(200).json({ message: "No favorites products" });
    }

    res.status(200).json({ count: favorites.length, favorites });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
