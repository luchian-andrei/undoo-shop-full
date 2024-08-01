const Router = require("express");
const Sales = require("../controllers/sales");

const router = Router();
module.exports = router;

router.get("/sales/:gender", Sales.readMany);
