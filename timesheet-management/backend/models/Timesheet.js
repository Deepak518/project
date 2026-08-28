const mongoose = require("mongoose");

const timesheetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    project: {
      type: String,
      required: true,
      trim: true
    },

    date: {
      type: Date,
      required: true
    },

    startTime: {
      type: String,
      required: true
    },

    endTime: {
      type: String,
      required: true
    },

    breakTime: {
      type: Number,
      default: 0
    },

    hours: {
      type: Number,
      required: true
    },

    description: {
      type: String,
      trim: true
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Timesheet",
  timesheetSchema
);