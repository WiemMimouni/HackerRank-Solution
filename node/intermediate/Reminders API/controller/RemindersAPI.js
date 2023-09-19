const Reminders = require("../models/reminders");

module.exports = {
  createReminder: async (req, res) => {
    try {
      const reminder = await Reminders.create(req.body);
      res.status(201).json(reminder);
    } catch (error) {
      console.error("Error creating reminder:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getReminders: async (req, res) => {
    try {
      const { user, after } = req.query;
      const whereClause = {};
      if (user) whereClause.user = user;
      if (after) whereClause.date = { [Op.gte]: new Date(parseInt(after)) };

      const reminders = await Reminders.findAll({
        where: whereClause,
        order: [["id", "ASC"]],
      });
      res.status(200).json(reminders);
    } catch (error) {
      console.error("Error retrieving reminders:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getReminderById: async (req, res) => {
    try {
      const { id } = req.params;
      const reminder = await Reminders.findByPk(id);
      if (!reminder) {
        res.status(404).send("ID not found");
      } else {
        res.status(200).json(reminder);
      }
    } catch (error) {
      console.error("Error retrieving reminder by ID:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  },
  putReminder(req, res) {
    res.sendStatus(405); 
    
  },

  patchReminder(req, res) {
    res.sendStatus(405); 
  },

  deleteReminder(req, res) {
    res.sendStatus(405); 
  },
};
