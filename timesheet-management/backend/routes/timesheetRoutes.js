const express = require("express");

const protect = require("../middleware/authMiddleware");

const {
  createTimesheet,
  getMyTimesheets
} = require("../controllers/timesheetController");

const router = express.Router();

router.post(
  "/",
  protect,
  createTimesheet
);

router.get(
  "/my",
  protect,
  getMyTimesheets
);

module.exports = router;