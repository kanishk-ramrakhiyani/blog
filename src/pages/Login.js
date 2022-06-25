import React from 'react'
import {auth,provider} from '../firebase.js'
import { signInWithPopup } from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import "../App.css"
function Login({setIsAuth})
{
    let navigate=useNavigate();
    const signInwithGoogle=()=> {
        signInWithPopup(auth,provider).then((result)=>{
            localStorage.setItem("isAuth",true);
            setIsAuth(true);
            navigate("/");

        })

    }


  return (
    <div className='loginpage'>
        <p>Sign with google</p>
        <button className='login-with-google-btn' onClick={signInwithGoogle}>Sign in with google</button>
    </div>
  );
}


export default Login