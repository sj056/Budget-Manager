import React, { useEffect } from "react";
import { auth, provider } from "./config/fire";
import "../css/LandingPage.css";
import NavLanding from "./NavLanding";
import logo from "../images/logo.gif";
import { useHistory } from "react-router";

import { db } from "./config/fire";

export default function LandingPage() {
  let his = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        db.ref('members/').once('value',snap=>{
          console.log(snap)
          if(snap.hasChild(user.uid)){
            his.push("/app");
          }
        })
    }})
    },[]);

  const signin = (e) => {
    his.push('/signin');
  }

  return (
    <>
      <NavLanding />
      <div className="land_main">
        <div>
          <p className="land_p">Track your expenses with an easy to use app</p>
          <button type="button" onClick={signin}  class="btn btn-primary land_button">
            TRY IT!
          </button>
        </div>
        <img src={logo} alt="logo" />
      </div>
    </>
  );
}
