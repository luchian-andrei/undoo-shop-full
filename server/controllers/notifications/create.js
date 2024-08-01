const { Notification } = require("../../models");

module.exports = async (req, res) => {
  const { date, text, purpose, read } = req.body;

  if (!text) {
    throw error(400, "You have to provide a text for the notification");
  }

  try {
    const newNotification = await Notification.create({
      purpose,
      date,
      text,
      read,
    });

    res.status(200).json({
      message: `Notification for ${purpose} was created`,
      newNotification,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
