// =================================== Jeff's Code ===========================================
// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Profile from "../src/components/client-portal/pages/Profile";
// import ActiveTicket from "./components/client-portal/pages/ActiveTicket";
// import Contact from "./components/client-portal/pages/Contacts";
// import CreateTicket from "./components/client-portal/pages/CreateTicket";

// function App() {
//   return (
//     <Router>
//       <div>
//         <Route exact path="/profile" component={Profile} />
//         <Route exact path="/create-tickets" component={CreateTicket} />
//         <Route exact path="/active-tickets" component={ActiveTicket} />
//         <Route exact path="/contacts" component={Contact} />
//       </div>
//     </Router>
// Meena's 
// import { React } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import NavigationBar from "../src/components/AdminPortal/NavigationBar/NavigationBar";
// import Jumbotron from "../src/components/AdminPortal/Jumbotron/Jumbotron";
// import AdminClients from "./pages/AdminClients";
// import AdminProjects from "./pages/AdminProjects";


import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./pages/Login.Component";
import SignUp from "./pages/SignUp.Component";
import Home from "./pages/Home.Component";
import Services from "./pages/Services.Component";

function App() {
  // Meena's code
  // return (
  //   // Dynamic client-side routing, allows to build a single-page web application with navigation without the page regreshing as the user navigates.
  //   <Router>
  //     <div>
  //       <NavigationBar />
  //       <Jumbotron />
  //       <Switch>
  //         <Route exact path={["/", "/clients"]}>
  //           <AdminClients />
  //         </Route>
  //         <Route exact path="/projects">
  //           <AdminProjects />
  //         </Route>
  //         {/* <Route>
  //           <NoMatch />
  //         </Route> */}
  //       </Switch>
  //     </div>
  //   </Router>
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/Home"}>Go Home</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to={"/Home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Services"}>Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div>
        {/* <div className="auth-inner"> */}
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/Services" component={Services} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;