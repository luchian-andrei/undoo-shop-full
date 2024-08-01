const routes = require("./routes");
const Router = require("express");

const router = Router();
module.exports = router;

router.use(routes.cart);
router.use(routes.favorites);
router.use(routes.notifications);
router.use(routes.products);
router.use(routes.newArrivals);
router.use(routes.sales);
router.use(routes.brands);
router.use(routes.trending);
