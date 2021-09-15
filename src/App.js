import React from 'react';
import './App.css';
import './css/LandingPage.css';
import './components/config/fire.js'
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Homepage from './components/Homepage';
function App() {
  return (
    <>

    <Router>

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

    </Router>

    </>
  );
}

export default App;
