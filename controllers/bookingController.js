const Activity = require("../models/Activity");
const Booking = require("../models/Booking");


const bookActivity = async (req, res) => {
  const { activityId } = req.body;
  try {
    const activity = await Activity.findById(activityId);
    if (!activity)
      return res.status(404).json({ message: "Activity not found" });

    const booking = await Booking.create({
      user: req.user._id,
      activity: activityId,
    });
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.userId }).populate(
      "activity"
    );
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { bookActivity, getMyBookings };
