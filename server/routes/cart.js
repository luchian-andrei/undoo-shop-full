const { Router } = require("express");
const Cart = require("../controllers/cart");

const router = Router();
module.exports = router;

router.get("/cart", Cart.readMany);
