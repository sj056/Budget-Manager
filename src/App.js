import React from "react";
import "./App.css";
import "./css/LandingPage.css";
import "./css/BudgetTable.css";
import "./components/config/fire.js";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage";
import Room from "./components/Room/Room";
import Signin from "./components/SignIn";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* route for homepage */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/details" component={Details}/>
          <Route exact path="/app" component={Homepage} />
          <Route exact path="/room" component={Room} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
