const db = require("../models");

// module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find(req.query)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },

//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }

//returns all users with "client" role, and their tickets
exports.findAllClients = (req, res) => {
      console.log("finallclients req: , req");
      db.user.find()
             .populate("clientTickets","-__v")
             .populate("roles")
             .then(dbModel => res.json(dbModel))
             .catch(err => res.status(422).json(err));
};
// returns all users with the associated "roles" document
exports.findAllUsers = (req, res) => {
      db.user.find()
             .populate("roles")
             .then(dbModel => res.json(dbModel))
             .catch(err => res.status(422).json(err));
};


exports.updateClientTickets = (req, res) => {
      console.log("req body clientTickets: ", req.body);
      db.user
            .findByIdAndUpdate({ _id: req.params.id }, 
                  {$push: {clientTickets: req.body.id}} ,  { new: true} )
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
                  //res.status(422).json(err));
};



/////protecting resources on server side//////
// exports.allAccess = (req, res) => {
//   res.status(200).send("Public Content.");
// };

// exports.userBoard = (req, res) => {
//   res.status(200).send("User Content.");
// };

// exports.adminBoard = (req, res) => {
//   res.status(200).send("Admin Content.");
// };

// exports.moderatorBoard = (req, res) => {
//   res.status(200).send("Moderator Content.");
// };