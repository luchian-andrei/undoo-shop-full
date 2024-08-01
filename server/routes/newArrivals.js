const { Router } = require("express");
const NewArrivals = require("../controllers/new-arrivals");

const router = Router();
module.exports = router;

router.use("/new-arrivals/:gender", NewArrivals.readMany);
