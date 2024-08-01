const { Schema, model, Types } = require("mongoose");

const name = "product";
const schema = new Schema(
  {
    category: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    sizes: [
      {
        type: String,
        required: true,
      },
    ],
    images: [
      {
        type: String,
      },
    ],
    price: { type: Number, required: true },
    oldPrice: { type: Number, default: null },
    new: { type: Boolean, default: false },
    onSale: { type: Boolean, default: false },
    popular: { type: Boolean, default: false },
    inCart: { type: Boolean, default: false },
    favorite: { type: Boolean, default: false },
    partOfOutfit: { type: Number, default: null },
  },

  { timestamps: true, collection: "products", versionKey: false }
);

module.exports = model(name, schema);
