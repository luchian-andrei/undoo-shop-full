const { Router } = require("express");
const Brands = require("../controllers/brands");

const router = Router();
module.exports = router;

router.get("/brands/:gender", Brands.readAll);
router.get("/brand/:brand/:gender", Brands.readMany);
