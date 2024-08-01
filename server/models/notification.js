const { Schema, model, Types } = require("mongoose");

const name = "notification";
const schema = new Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now(),
    },
    purpose: {
      type: String,
    },
    text: {
      type: String,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, collection: "notifications", versionKey: false }
);

module.exports = model(name, schema);
