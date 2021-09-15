import React from 'react';
import './App.css';
import './css/LandingPage.css';
import './components/config/fire.js'
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <>
    <Router>
    <LandingPage/>
    </Router>
    </>
  );
}

export default App;
