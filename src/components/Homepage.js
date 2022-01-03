import React, { useState } from 'react';
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

  const [sent,setSent]=useState(false)
  // const [email,setEmail]=useState("")


  const addMember=(e)=>{
    e.preventDefault();
    const cont=document.getElementById("memberInputs")
    cont.innerHTML+="<input type='email' placeholder='Gmail id of the member' />"
  }

  const closeModal=(e)=>{
    e.preventDefault();
    props.setCreateRoom(false);
  }

const handleSend= async(email)=>{
setSent(true)
// setEmail(em1)
console.log(email)
try{
await axios.post("http://localhost:4000/send_mail",{
  email
})
}
catch(error){
console.log(error)
}
  }

  const handleCreateRoom=(e)=>{
    e.preventDefault();
    
    var form = document.getElementById("formCR")
    var selectElement = form.querySelectorAll('input[type="email"]');
    
    for(var i=0;i<selectElement.length;i++){
     setTimeout(handleSend(selectElement[i].value),4000) 
    }

    // db.ref("user").set({
    //   name : name,
    //   age : age,
    // }).catch(alert);


  }

  return(
    <section className="Create-room">
      <div className="inputModal">
        <h4>Create room</h4>
        <img src={close} className="close" alt="close" onClick={e=>closeModal(e)}/>
        <form className="d-flex flex-column" id="formCR" onSubmit={e=>handleCreateRoom(e)}>
          <input type="text" placeholder="Name of the Room"/>
          <input type="text" placeholder="Motive of creating a group"/>
          <div id="memberInputs"></div>
          <button className="add_mem" type="add_mem" onClick={e=>addMember(e)}>Add Member</button>
          
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