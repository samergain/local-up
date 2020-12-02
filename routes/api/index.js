const router = require("express").Router();
const userRoutes = require("./user.routes");
const projectRoutes = require("./project.routes");
const roleRoutes = require("./role.routes");
const taskRoutes = require("./task.routes");
const ticketRoutes = require("./ticket.routes");
const blogRoutes = require("./blog.routes");

//ho ho ho routes for everyone. the route at this stage is "/api" then you add to it
//the first argument after router.use
//example: line 12 will build the route to be /api/user
router.use("/user", userRoutes);
router.use("/project", projectRoutes);
router.use("/role", roleRoutes);
router.use("/task", taskRoutes);
router.use("/ticket", ticketRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
