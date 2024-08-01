const { Router } = require("express");
const Favorites = require("../controllers/favorites");

const router = Router();
module.exports = router;

router.get("/favorites", Favorites.readMany);
