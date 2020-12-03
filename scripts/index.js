const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/clientProfile"
);

const ClientSeed = [
  {
    id: "1",
    company: "Test Company",
    name: "Mr. Bison",
    description:
      "We are a testing company",
    email: "mr.bison@streetfighter.com",
    contact: "651-123-4567",
    tickets: []
  },
  {
    id: "2",
    company: "Tiger Test Knee",
    name: "Sagat",
    description:
      "Tiger Uppercut",
    email: "sagat@streetfighter.com",
    contact: "651-456-7890",
    tickets: []
  },
  {
    id: "2",
    company: "Hadoken",
    name: "Ryu",
    description:
      "That spinning kick.",
    email: "ryu@streetfighter.com",
    contact: "651-789-0123",
    tickets: []
  }
];

db.Client
  .remove({})
  .then(() => db.collection.insertMany(ClientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
