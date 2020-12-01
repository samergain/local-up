import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "../src/components/client-portal/pages/Profile";
import ActiveTicket from "./components/client-portal/pages/ActiveTicket";
import Contact from "./components/client-portal/pages/Contacts";
import CreateTicket from "./components/client-portal/pages/CreateTicket";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/create-tickets" component={CreateTicket} />
        <Route exact path="/active-tickets" component={ActiveTicket} />
        <Route exact path="/contacts" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
