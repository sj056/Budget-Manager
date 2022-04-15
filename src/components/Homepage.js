import React, { useState,useRef  } from 'react';
import emailjs from '@emailjs/browser';
import uniqid from 'uniqid';

import axios from "axios";
import {db} from './config/fire';
import NavHome from './NavHome';
import './../css/Homepage.css';

import emp from './../images/emptyCardCont.png';
import close from './../images/cross.png';

const Homepage=()=>{
const [createRoom,setCreateRoom]=useState(false);
const [codeTeam,setCodeTeam]=useState(false);
    return(
      <section className="Homepage">
        <NavHome/>
        <section className="content-container">
          <div className="cards-container">
            {createRoom===true?
            <CreateRoom setCreateRoom={setCreateRoom}/>:""}
            {codeTeam===true?
            <CodeTeam setCodeTeam={setCodeTeam}/>:""}
            
            <div className="empty-Container">
              <h3>IT'S</h3>
              <img src={emp} alt="empty" height="130px"/>
              <h3>here!</h3>
            </div>
          </div>
          <section className="btns-container d-flex">
            <button onClick={e=>setCodeTeam(true)}>Enter the code for the room</button>
            <button onClick={e=>setCreateRoom(true)}>Create a room</button>
          </section>
        </section>
      </section>
    );
}

const CreateRoom=(props)=>{
  const form = useRef();
  // const [sent,setSent]=useState(false)
  // const [mailContent,setMailContent]=useState({})
  const [code,setCode]=useState('');
  // const [email,setEmail]=useState("")

  const addMember=(e)=>{
    e.preventDefault();
    const cont=document.getElementById("memberInputs")
    cont.innerHTML+="<input type='email' placeholder='Gmail id of the member' name='emailId' />"
  }
  const closeModal=(e)=>{
    e.preventDefault();
    props.setCreateRoom(false);
  }

  const sendEmail = () => {
    emailjs.sendForm('service_quqhtl9', 'template_e9n5qk6', form.current, 'user_NSOXI1OzkN09to6um6fQX')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const handleCreateRoom=(e)=>{
    e.preventDefault();
    setCode(uniqid());
    setTimeout(()=>{
      sendEmail()
      },9000)
  }

  return(
    <section className="Create-room">
      <div className="inputModal">
        <h4>Create room</h4>
        <img src={close} className="close" alt="close" onClick={e=>closeModal(e)}/>
        <form ref={form} className="d-flex flex-column" id="formCR" onSubmit={e=>handleCreateRoom(e)}>
          <input type="text" placeholder="Name of the Room" name="roomname"/>
          <input type="text" placeholder="Motive of creating a group" name="motive"/>
          <div id="memberInputs"></div>
          <button className="add_mem" type="add_mem" onClick={e=>addMember(e)}>Add Member</button>
          <input type="text" name="room_code" id="room" value={code} style={{display:"none"}}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

const CodeTeam=(props)=>{

  const closeModal=(e)=>{
    e.preventDefault();
    props.setCodeTeam(false);
  }

  return(
    <section className="Create-room">
      <div className="inputModal">
        <h4>Enter the Room Code</h4>
        <img src={close} className="close" alt="close" onClick={e=>closeModal(e)}/>
        <form className="d-flex flex-column">
          <input type="text" placeholder="Room Code"/>
          <div id="memberInputs"></div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}


export default Homepage;