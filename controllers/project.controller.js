const db = require("../models");

module.exports = {
  // findAll: function(req, res) {
  //   console.log("printing from findall project controller: " , req);
  //   db.project
  //     .find(req.query)
  //     .populate("tasks")
  //     .populate("ticket")
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findAll: function(req, res) {
    // console.log("printing from findall project controller: " , req);
    db.Project
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Project
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Project
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  ///api/project/projectTask/:id
  updateProjectTasks : function (req, res) {
    db.Project
          .findByIdAndUpdate({ _id: req.params.id }, 
                {$push: {tasks: req.body.id}} ,  { new: true} )
          .then(dbModel => res.json(dbModel))
          .catch(err => console.log(err));
                //res.status(422).json(err));
  },
  update: function(req, res) {
    db.Project
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
