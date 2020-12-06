const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/localupDB"
);

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

// const ClientSeed = [
//   {
//     originalID: "1",
//     company: "Test Company",
//     name: "Mr. Bison",
//     password: "Test1",
//     description:
//       "We are a testing company",
//     email: "mr.bison@streetfighter.com",
//     contact: "651-123-4567"
//   },
//   {
//     originalID: "2",
//     company: "Tiger Test Knee",
//     name: "Sagat",
//     password: "Test2",
//     description:
//       "Tiger Uppercut",
//     email: "sagat@streetfighter.com",
//     contact: "651-456-7890"
//   },
//   {
//     originalID: "3",
//     company: "Hadoken",
//     name: "Ryu",
//     password: "Test3",
//     description:
//       "That spinning kick.",
//     email: "ryu@streetfighter.com",
//     contact: "651-789-0123"
//   },
//   {
//     originalID: "4",
//     company: "",
//     name: "Ken",
//     password: "Test3",
//     description:
//       "",
//     email: "ken@streetfighter.com",
//     contact: "123-456-7890"
//   },
//   {
//     originalID: "5",
//     company: "",
//     name: "Chung Li",
//     password: "Test3",
//     description:
//       "That spinning kick.",
//     email: "ryu@streetfighter.com",
//     contact: "651-789-0123"
//   },
//   {
//     originalID: "6",
//     company: "Hadoken",
//     name: "Ryu",
//     password: "Test3",
//     description:
//       "That spinning kick.",
//     email: "ryu@streetfighter.com",
//     contact: "651-789-0123"
//   }
// ];

// db.Client
//   .remove({})
//   .then(() => db.collection.insertMany(ClientSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
