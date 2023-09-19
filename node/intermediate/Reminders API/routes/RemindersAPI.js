const router = require("express").Router();
const controller = require("../controllers/reminders");

router.post("/", controller.createReminder);
router.get("/", controller.getReminders);
router.get("/:id", controller.getReminderById);
router.put('/:id', controller.putReminder);

router.patch('/:id', controller.patchReminder);

router.delete('/:id', controller.deleteReminder);
module.exports = router;
