const router = require("express").Router();
const taskController = require("../../controllers/task.controller");

// Matches with "/api/task"
router.route("/")
  .get(taskController.findAll)
  .post(taskController.create);

// Matches with "/api/task/:id"
router
  .route("/:id")
  .get(taskController.findById)
  .put(taskController.update)
  .delete(taskController.remove);

module.exports = router;
