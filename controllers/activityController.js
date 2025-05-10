const Activity = require("../models/Activity");


const listActivity = async (req, res) => {
    try {
      const activities = await Activity.find();
      return res.status(200).json(activities);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  
  module.exports = { listActivity };
  