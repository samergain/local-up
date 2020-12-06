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

const userSeed = [
  {
    username: "test1",
    email: "kitty@gmail.com",
    password: "test",
    name: "Kitten Wild",
    company: "Cat in the Hat Stores",
    contact: "671-203-2234",
    roles: "ROLE_CLIENT",
    projects: [],
    tasks: [],
    tickets: ["ticket1", "ticket2", "ticket3"]
  },
  {
    username: "test2",
    email: "jamie.miller@gmail.com",
    password: "test",
    name: "Jamie Miller",
    company: "Eat & Skate",
    contact: "678-111-5456",
    roles: "ROLE_CLIENT",
    projects: [],
    tasks: [],
    tickets: ["ticket21", "ticket22"]
  },
  {
    username: "test3",
    email: "phoebie.thomas@gmail.com",
    password: "test",
    name: "Phoebie Thomas",
    contact: "567-373-8674",
    github: "phoebie@github.com",
    skills: ["React", "Node", "MongoDB", "Express"],
    roles: ["ROLE_ADMIN"]
  },
  {
    username: "test4",
    email: "joan.preston@gmail.com",
    password: "test",
    name: "Phoebie Thomas",
    contact: "948-937-8262",
    github: "phoebie@github.com",
    skills: ["Java", "Node", "MySQL", "Express", "Network"],
    roles: "ROLE_ADMIN"
  },
  {
    username: "test5",
    email: "praveen.modi@gmail.com",
    password: "test",
    name: "Praveen Modi",
    contact: "111-222-2345",
    github: "praveenmodi@github.com",
    skills: ["Java", "Node", "MySQL", "MongoDB", "Express"],
    roles: "ROLE_DEVELOPER",
    projects: ["proj1", "proj2"],
    tasks: ["task1", "task22"],
    tickets: ["ticket1", "ticket22" ]
  }
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  
  // Load Tickets Collection
  const ticketSeed = [
    {
      title: "ticket1",
      description:"Kitty Wild - New Website created using React and Expess.",
      status: "Started"
    },
    {
      title: "ticket2",
      description:"Kitty Wild - New POS Application.",
      status: "Queued"
    },
    {
      title: "ticket3",
      description:"Kitty Wild - Refactor their old website to latest technologies.",
      status: "Testing"
    },
    {
      title: "ticket21",
      description: "Eat and Skate - fix contact page",
      status: "Queued"
    },
    {title: "ticket22",
      description:"Eat and Skate wants - New Sales application",
      status: "Queued"
  }
  ];
  
 db.Ticket
    .remove({})
    .then(() => db.Ticket.collection.insertMany(ticketSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
