const router = require("express").Router();
const blogController = require("../../controllers/blog.controller");

// Matches with "/api/blog"
router.route("/")
  .get(blogController.findAll)
  .post(blogController.create);

// Matches with "/api/blog/:id"
router.route("/:id")
  .get(blogController.findById)
  .put(blogController.update)
  .delete(blogController.remove);

module.exports = router;
