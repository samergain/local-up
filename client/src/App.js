import { React } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "../src/components/AdminPortal/NavigationBar/NavigationBar";
import Jumbotron from "../src/components/AdminPortal/Jumbotron/Jumbotron";
import AdminClients from "./pages/AdminClients";
import AdminProjects from "./pages/AdminProjects";
import './App.css';

function App() {
  return (
    // Dynamic client-side routing, allows to build a single-page web application with navigation without the page regreshing as the user navigates.
    <Router>
      <div>
        <NavigationBar />
        <Jumbotron />
        <Switch>
          <Route exact path={["/", "/clients"]}>
            <AdminClients />
          </Route>
          <Route exact path="/projects">
            <AdminProjects />
          </Route>
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
