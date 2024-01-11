const Subscription = require("../models/subscription");
const User = require("../models/user");

const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.user.email });
    return res.status(200).json({
      data: { username: user.username, profilePic: user.profilepic },
      msg: "User fetched successfully.",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Some error occured" });
  }
};

const getSubscriptions = async (req, res) => {
  try {
    const subs = await Subscription.find();
    return res
      .status(200)
      .json({ data: subs, msg: "Subscriptions found successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal error." });
  }
};

module.exports = { getSubscriptions, getCurrentUser };
