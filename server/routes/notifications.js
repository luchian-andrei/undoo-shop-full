const Router = require("express");
const Notifications = require("../controllers/notifications");

const router = Router();
module.exports = router;

router.post("/notifications", Notifications.create);
router.get("/notifications", Notifications.readMany);
router.put("/notifications/:id", Notifications.update);
