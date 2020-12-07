const mongoose = require("mongoose");
const db = require("../models");
// const ticketdb = require("../models/ticket.model");

// This file empties the User collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/localupDB"
);

console.log("db: ", db);
//Load User Collection

// const userSeed = [
//   {
//     username: "test1",
//     email: "kitty@gmail.com",
//     password: "test",
//     name: "Kitten Wild",
//     company: "Cat in the Hat Stores",
//     contact: "671-203-2234",
//     roles: ["5fcc5fade27ebb3c7cec96a5"],  //client
//     projects: [],
//     tasks: [],
//     tickets: ["5fcc5fade27ebb3c7cec969f", "5fcc5fade27ebb3c7cec96a0", "5fcc5fade27ebb3c7cec96a1"]
//   },
//   {
//     username: "test2",
//     email: "jamie.miller@gmail.com",
//     password: "test",
//     name: "Jamie Miller",
//     company: "Eat & Skate",
//     contact: "678-111-5456",
//     roles: ["5fcc5fade27ebb3c7cec96a5"], //client
//     projects: [],
//     tasks: [],
//     tickets: ["5fcc5fade27ebb3c7cec96a2", "5fcc5fade27ebb3c7cec96a3"]
//   },
//   {
//     username: "test3",
//     email: "phoebie.thomas@gmail.com",
//     password: "test",
//     name: "Phoebie Thomas",
//     contact: "567-373-8674",
//     github: "phoebie@github.com",
//     skills: ["React", "Node", "MongoDB", "Express"],
//     roles: ["5fcc5fade27ebb3c7cec96a4"]   //admin
//   },
//   {
//     username: "test4",
//     email: "joan.preston@gmail.com",
//     password: "test",
//     name: "Phoebie Thomas",
//     contact: "948-937-8262",
//     github: "phoebie@github.com",
//     skills: ["Java", "Node", "MySQL", "Express", "Network"],
//     roles: ["5fcc5fade27ebb3c7cec96a4"]  //admin
//   },
//   {
//     username: "test5",
//     email: "praveen.modi@gmail.com",
//     password: "test",
//     name: "Praveen Modi",
//     contact: "111-222-2345",
//     github: "praveenmodi@github.com",
//     skills: ["Java", "Node", "MySQL", "MongoDB", "Express"],
//     roles: ["5fcc5fade27ebb3c7cec96a6"],   //dev
//     projects: ["proj1", "proj2"],
//     tasks: ["task1", "task22"],
//     tickets: ["ticket1", "ticket22"]
//   }
// ];

// db.user
//   .remove({})
//   .then(() => db.user.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


// // Load Tickets Collection
// const ticketSeed = [
//   {
//     title: "ticket1",
//     description: "Kitty Wild - New Website created using React and Expess.",
//     status: "Started"
//   },
//   {
//     title: "ticket2",
//     description: "Kitty Wild - New POS Application.",
//     status: "Queued"
//   },
//   {
//     title: "ticket3",
//     description: "Kitty Wild - Refactor their old website to latest technologies.",
//     status: "Testing"
//   },
//   {
//     title: "ticket21",
//     description: "Eat and Skate - fix contact page",
//     status: "Queued"
//   },
//   {
//     title: "ticket22",
//     description: "Eat and Skate wants - New Sales application",
//     status: "Queued"
//   }
// ];

// db.Ticket
//   .remove({})
//   .then(() => db.Ticket.collection.insertMany(ticketSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


//Role
// Load Roles Collection
const roleSeed = [
  {
    name: "admin",
  },
  {
    name: "client",
  },
  {
    name: "developer",
  }
]

db.role
  .remove({})
  .then(() => db.role.collection.insertMany(roleSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


// //Project
// // Load Project Collection
const projectSeed = [
  {
    title: "Project 123",
    description: "Project 123 description",
    githubRepo: "project123.github.com",
    createdBy: "test3",
    status:"initiated",
    assignedDevs: [],
    tasks:[],
    ticket:["5fcc5fade27ebb3c7cec969f"] // ticket1
  },
  {
    title: "Project 456",
    description: "Project 456 description",
    githubRepo: "project456.github.com",
    createdBy: "test3",
    status:"initiated",
    assignedDevs: [],
    tasks:[],
    ticket:["5fcc5fade27ebb3c7cec96a2"] //ticket21
  }
]

db.Project
  .remove({})
  .then(() => db.Project.collection.insertMany(projectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
