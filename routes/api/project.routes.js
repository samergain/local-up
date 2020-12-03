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

module.exports = router;
