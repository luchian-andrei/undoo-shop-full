const { Notification } = require("../../models");

module.exports = async (req, res) => {
  try {
    const notifications = await Notification.find({ read: false }).sort({
      date: "ascending",
    });
    res.status(200).json({ count: notifications.length, notifications });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
