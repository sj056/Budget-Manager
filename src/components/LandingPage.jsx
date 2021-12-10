import React, { useEffect } from "react";
// import App from '../App'
import { auth, provider } from "./config/fire";
import "../css/LandingPage.css";
import NavLanding from "./NavLanding";
import logo from "../images/logo.gif";
import { useHistory } from "react-router";
export default function LandingPage() {
  let his = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        his.push("/app");
      }
    });
  }, []);

  const signin = (e) => {
    auth.signInWithPopup(provider).catch(alert);
  };

  return (
    <>
      {/* <div className="land">
                <img className="img" src={logo} alt="Logo" />
                <p className="text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br/> sed do eiusmod
                tempor incididunt ut labore et dolore.</p>
                <button onClick={e=>signin(e)} type="button" class="btn my-5">Try it!!!!</button>
            </div> */}
      <NavLanding />
      <div className="land_main">
        <div>
          <p className="land_p">Track your expenses with an easy to use app</p>
          <button type="button" onClick={e=>signin(e)}  class="btn btn-primary land_button">
            TRY IT!
          </button>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}
