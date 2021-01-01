const router = require("express").Router();
const projectController = require("../../controllers/project.controller");

// Matches with "/api/project"
router.route("/")
  .get(projectController.findAll)
  .post(projectController.create);

// Matches with "/api/project/:id"
router
  .route("/:id")
  .get(projectController.findById)
  .put(projectController.update);
// Matches with "/api/project/projectTask/:id"
router
  .route("/projectTask/:id")
  .put(projectController.updateProjectTasks)
module.exports = router;
