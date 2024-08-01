const { Notification } = require("../../models");

module.exports = async (req, res) => {
  const { id } = req.params;
  const { read } = req.body;

  try {
    const notification = await Notification.findByIdAndUpdate(id, { read });
    res.status(200).json({ message: "Notification read !", notification });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
