const router = require("express").Router();
const roleController = require("../../controllers/role.controller");

// Matches with "/api/role"
router.route("/")
  .get(roleController.findAll)
  .post(roleController.create);

// Matches with "/api/role/:id"
router
  .route("/:id")
  .get(roleController.findById);

module.exports = router;
