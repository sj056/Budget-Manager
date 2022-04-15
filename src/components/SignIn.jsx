import {db,auth} from './config/fire.js';
import {React, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

const Signin=(props)=>{
  let his=useHistory();
  const [email , setemail] = useState('');
  const [password , setpassword] = useState('');
  const [sent,setSent]=useState(false);
  const [mode,setMode]=useState('signup')

  useEffect(()=>{
        if(sent)
          his.push('/details')
  },[sent,auth])

  const signup = (e)=>{
    e.preventDefault();
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        if(email.length !== -1){
            //VALID
            auth.createUserWithEmailAndPassword(email , password)
            .then((userCredential)=>{
                // send verification mail.
              userCredential.user.sendEmailVerification();
              alert("Email sent");
              setSent(true);
            })
            .catch(alert);
        }
    }
     
  }
 
  const signin=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((e)=>{ his.push({pathname:'/app'})
    }).catch(function(error) {
      console.log(error)
  });
  }

  return (
    <div className="signup-container">
      
    <div className="signUp">
        <br/><br/>
        <div>
          <input  type="email"  placeholder="EMAIL ID"
          onChange={(e)=>{setemail(e.target.value)}} required/>
          <br/><br/>
          <input type="password"   placeholder="PASSWORD"
          onChange={(e)=>{setpassword(e.target.value)}} validate required/>
      
          <br/><br/>
          {mode==="signup"?
          <>
          <button onClick={e=>signup(e)}>Sign-up</button>
          <p className="subLine">Already a user? <button onClick={e=>{{setMode('signin')}}}>SIGN IN</button> now!</p>
          </>:
          ""}
          <br/><br/>

          {mode==="signin"?
          <>
          <button onClick={e=>signin(e)}>SIGN IN</button>
          <p className="subLine">New here? <button onClick={e=>{setMode('signup')}}>SIGN UP</button> now!</p>
          </>
          :""}
        </div>        
    </div>
    
    </div>
  );
}

const Signup=()=>{

}
export default Signin;