const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },

    region: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      default: "France",
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    frenchTip: {
      type: String,
    },

    attractions: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Destination", destinationSchema);