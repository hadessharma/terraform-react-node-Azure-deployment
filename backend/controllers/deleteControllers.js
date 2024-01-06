const Subscription = require("../models/subscription");

const deleteSubscriptions = async (req, res) => {
  try {
    const { id } = req.params;
    const subs = await Subscription.findByIdAndDelete(id);
    return res
      .status(200)
      .json({ data: subs, msg: "Subscriptions deleted successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal error." });
  }
};

module.exports = { deleteSubscriptions };
