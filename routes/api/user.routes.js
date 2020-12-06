////////Samer version without authentication - tested and proven OK!//////////
// const router = require("express").Router();
// const userController = require("../../controllers/user.controller");

// // Matches with "/api/user"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create);

// // Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update);

// module.exports = router;

///////tutorial version - testing mode////////
const { authJwt } = require("../../middlewares");
const controller = require("../../controllers/user.controller");

module.exports = function(app) {
  
  app.put("/api/user/clientTicket/:id", controller.updateClientTickets);
  app.get("/api/user/clients", controller.findAllClients);
  
  
  /////////protecting resources on server side/////////
  // app.use(function(req, res, next) {
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "x-access-token, Origin, Content-Type, Accept"
  //   );
  //   next();
  // });
  // app.get("/api/test/all", controller.allAccess);

  // app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  // app.get(
  //   "/api/test/mod",
  //   [authJwt.verifyToken, authJwt.isDeveloper],
  //   controller.moderatorBoard
  // );

  // app.get(
  //   "/api/test/admin",
  //   [authJwt.verifyToken, authJwt.isAdmin],
  //   controller.adminBoard
  // );
};