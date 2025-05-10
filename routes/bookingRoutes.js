const express = require("express");
const auth = require("../middleware/auth");
const {
  getMyBookings,
  bookActivity,
} = require("../controllers/bookingController");
const router = express.Router();

router.post("/", auth, bookActivity);
router.get("/my", auth, getMyBookings);

module.exports = router;
