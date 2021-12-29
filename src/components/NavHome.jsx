import React from "react";
import { useHistory } from 'react-router';
import { auth } from './config/fire';
import './../css/Nav.css';
import profile from "./../images/profile.png";
const NavHome=()=>{

  let his=useHistory();

  const signOut=(e)=>{
    e.preventDefault();
    auth.signOut();
    his.push('/');
  }

    return(
        <nav className="navbar navbar-expand-lg navHome">
        <a class="navbar-brand" href="#">BM</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home </a>
            </li>

           
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src={profile} alt="profile" height="27px"/>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

            <li className="nav-item">
              <button onClick={e=>signOut(e)}>SIGN OUT</button>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default NavHome;