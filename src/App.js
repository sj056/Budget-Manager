import React from 'react';
import './App.css';
import './css/LandingPage.css';
import './css/BudgetTable.css';
import './components/config/fire.js'
import LandingPage from './components/LandingPage';
import BudgetTable from './components/BudgetTable';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
   <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/budget" component={BudgetTable} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
