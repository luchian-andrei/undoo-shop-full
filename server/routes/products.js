const { Router } = require("express");
const Products = require("../controllers/products");

const router = Router();
module.exports = router;

router.get("/products", Products.readAll);
router.get("/products/:category/:gender", Products.readMany);
router.get("/product/:id", Products.readOne);
router.post("/products", Products.create);
router.put("/products/:id", Products.update);
