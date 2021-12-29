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
        // if(db.ref('/members/'+user.uid)){
        //   his.push("/app");
        // }
        // else{
          // db.ref('/members/').push(user.uid);
          // his.push('/makeProfile');
        // }

        auth.getUser(user.uid).then(() => {
          his.push("/app");
        }).catch(() =>{
          db.ref('/members/').set(user.uid);
          his.push('/makeProfile');
        })

      }
    });
  }, []);

  const signin = (e) => {
    auth.signInWithPopup(provider).catch(alert);

  //   auth
  // .signInWithPopup(provider)
  // .then((result) => {
  
  //   var credential = result.credential;

  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;

  //   if(auth)

  //   // ...
  // }).catch((error) => {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });

      }

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
