const { Router } = require("express");
const Trending = require("../controllers/trending");

const router = Router();
module.exports = router;

router.get("/trending/:gender", Trending.readMany);
