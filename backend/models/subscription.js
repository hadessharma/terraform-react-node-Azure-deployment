const mongoose = require("mongoose");

const { Schema } = mongoose;

const subscriptionSchema = new Schema(
  {
    subscriptionName: {
      type: String,
      required: true,
    },
    subscriptionId: {
      type: String,
      required: true,
    },
    tenantId: {
      type: String,
      required: true,
    },
    clientId: {
      type: String,
      required: true,
    },
    clientSecret: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Subscription", subscriptionSchema);
