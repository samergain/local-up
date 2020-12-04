const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 8080;

let corsOptions = {
  origin: "http://localhost:3000"  //maybe change it to 3000 to match react??
};


app.use(cors(corsOptions));

// This application level middleware prints incoming requests to the servers console, useful to see incoming requests
app.use((req, res, next) => {
  console.log(`Request_Endpoint: ${req.method} ${req.url}`);
  next();
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view

require('./routes/api/auth.routes')(app);
require('./routes/api/user.routes')(app);
app.use(routes);
//added from tutorial to be checked
//const db = require("./app/models");

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/clientProfile",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
          })
          .then(() => {
            console.log("Successfully connect to MongoDB.");
          })
          .catch(err => {
            console.error("Connection error", err);
            process.exit();
          });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
