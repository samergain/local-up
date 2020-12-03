const router = require("express").Router();
//const userRoutes = require("./user.routes");
const projectRoutes = require("./project.routes");
const roleRoutes = require("./role.routes");
const taskRoutes = require("./task.routes");
const ticketRoutes = require("./ticket.routes");
const blogRoutes = require("./blog.routes");

//router.use("/user", userRoutes);
router.use("/project", projectRoutes);
router.use("/role", roleRoutes);
router.use("/task", taskRoutes);
router.use("/ticket", ticketRoutes);
router.use("/blog", blogRoutes);

module.exports = router;
