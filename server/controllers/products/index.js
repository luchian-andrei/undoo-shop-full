const create = require("../products/create");
const readMany = require("./read-many");
const readAll = require("./read-all.js");
const readOne = require("./read-one");
const update = require("./update");

module.exports = {
  create,
  readMany,
  readOne,
  update,
  readAll,
};
