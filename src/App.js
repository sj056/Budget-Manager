import React from 'react';
import './App.css';
import './css/LandingPage.css';
import './css/BudgetTable.css';
import './components/config/fire.js'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';
import LandingPage from './components/LandingPage';
<<<<<<< HEAD
import BudgetTable from './components/BudgetTable';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
=======
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Homepage from './components/Homepage';
import Nav from './components/Nav';
>>>>>>> 3d6de6083d3eb9e107d3666d48bb1ee34ebe2cd9
function App() {
  return (
    <>
    <Router>
<<<<<<< HEAD
   <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/budget" component={BudgetTable} />
    </Switch>
=======
    <Switch>
{/* route for landing page */}
      <Route exact path="/">
        <LandingPage/>
      </Route>
{/* route for homepage */}
      <Route path="/app">
        <Homepage/>
      </Route>

    </Switch>

>>>>>>> 3d6de6083d3eb9e107d3666d48bb1ee34ebe2cd9
    </Router>

    </>
  );
}

export default App;
