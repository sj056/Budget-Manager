import {db,auth} from './config/fire.js';
import {React, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

const Details=()=>{
    
    var his=useHistory();
    const [formstate,setFormstate]=useState(false)
    const [uid,setUid]=useState(null)
    const [name,setName]=useState('')
    const [contactNo,setContactNo]=useState('')
    const [email , setemail] = useState('');
    const [password , setpassword] = useState('');

    useEffect(()=>{
        var user=auth.currentUser;
              if(user){
                setUid(user.uid)
                if(uid){
                    db.ref("members/"+uid).set({
                        email:user.email
                    })
                }
            
            }
    });
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        db.ref("members/"+uid).update({
            name:name,
            contactNumber:contactNo
        });
        his.push('/app');
    }
   
    const signin=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then((e)=>{setFormstate(true)
        }).catch(function(error) {
          console.log(error)
      });
      }

    return(
        <>
            {formstate? 
                <form>
                    <input type="text" placeholder='name' onChange={e=>setName(e.target.value)}/>
                    <input type="tel" placeholder='Phone no' onChange={(e)=>{setContactNo(e.target.value)}}/>
                    <button type='button' onClick={e=>handleSubmit(e)}>Submit</button>
                </form>
            :<div>

                <input  type="email"  placeholder="EMAIL ID"
                onChange={(e)=>{setemail(e.target.value)}} required/>
                <br/><br/>
                <input type="password"   placeholder="PASSWORD"
                onChange={(e)=>{setpassword(e.target.value)}} validate required/>
                <button type='button' onClick={e=>signin(e)}>Sign in</button>
            </div>
            }
        </>
    );
}
export default Details;