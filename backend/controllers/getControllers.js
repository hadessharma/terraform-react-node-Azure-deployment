const Subscription = require("../models/subscription");

const getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find();
    return res
      .status(200)
      .json({ data: subs, msg: "Subscriptions found successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ Error: "Internal error." });
  }
};

module.exports = { getSubscriptions };
