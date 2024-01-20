const mongoose = require("mongoose");

const { Schema } = mongoose;

const resourceSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    details: {
      type: Schema.Types.Mixed,
      default: {},
    },
    subscriptionId: {
      type: Schema.ObjectId,
      ref: "Subscription",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resource", resourceSchema);
