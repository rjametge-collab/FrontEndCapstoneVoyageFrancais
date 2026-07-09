const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced"],
      default: "Beginner",
    },

    category: {
      type: String,
      required: true,
    },

    vocabulary: [
      {
        french: String,
        english: String,
      },
    ],

    phrases: [
      {
        french: String,
        english: String,
      },
    ],

    grammar: {
      type: String,
    },

    pronunciationTip: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Lesson", lessonSchema);