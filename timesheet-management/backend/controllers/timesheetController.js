const Timesheet = require("../models/Timesheet");

const createTimesheet = async (req, res) => {
  try {

    const {
      project,
      date,
      startTime,
      endTime,
      breakTime,
      description
    } = req.body;

    if (
      !project ||
      !date ||
      !startTime ||
      !endTime
    ) {
      return res.status(400).json({
        message: "Please fill all required fields"
      });
    }

    const start = new Date(
      `1970-01-01T${startTime}:00`
    );

    const end = new Date(
      `1970-01-01T${endTime}:00`
    );

    let difference =
      (end - start) / (1000 * 60 * 60);

    if (difference < 0) {
      difference += 24;
    }

    const breakHours =
      Number(breakTime || 0) / 60;

    const totalHours =
      Math.max(0, difference - breakHours);

    const timesheet = await Timesheet.create({
      user: req.user.id,
      project,
      date,
      startTime,
      endTime,
      breakTime: Number(breakTime || 0),
      hours: Number(totalHours.toFixed(2)),
      description
    });

    res.status(201).json({
      message: "Timesheet created successfully",
      timesheet
    });

  } catch (error) {

    console.error(
      "Create timesheet error:",
      error
    );

    res.status(500).json({
      message: "Server error"
    });
  }
};


const getMyTimesheets = async (req, res) => {
  try {

    const timesheets =
      await Timesheet.find({
        user: req.user.id
      }).sort({
        date: -1
      });

    res.status(200).json(timesheets);

  } catch (error) {

    console.error(
      "Get timesheets error:",
      error
    );

    res.status(500).json({
      message: "Server error"
    });
  }
};


module.exports = {
  createTimesheet,
  getMyTimesheets
};