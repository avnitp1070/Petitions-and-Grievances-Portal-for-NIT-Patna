import React from 'react'
import FrameImage from "../Assets/Frame.png"
import LoginForm from './LoginForm'
import SignupForm from './SignUpForm'
import { FcGoogle } from 'react-icons/fc' 
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Template.css'

import { auth, provider, signInWithPopup } from '../Firebase';

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) => {

  const navigate=useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
      setIsLoggedIn(true);
      toast.success('Account created successfully', {
        position: "top-center"
      });
      navigate("/dashboard");
      
    } catch (error) {
      console.error("Error signing in with Google:", error);
      toast.error('Signup failed: ' + error.message, {
        position: "top-center"
      });
    }
  };

  return (
    // <div>
      <div className="tem">
        <div style={{
          width: '91.6667%', 
          maxWidth: '550px',
          marginTop: '0',
          marginLeft: '0', 
       }}>
          <h1 style={{
           color: '#161616', 
           fontWeight: '600', 
           marginTop: '0',
           fontSize: '1.875rem', 
           lineHeight: '0.125rem', 
          }}
          >{title}</h1>

          <p style={{
             fontSize: '1.125rem', lineHeight: '1.625', }}>
            <span>{desc1}</span>
            <br/>
            <span style={{
              color: '#000080', 
              fontStyle: 'italic', 
             }}>{desc2}</span>   
          </p>

          {
            formtype === 'login' ? 
            (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            :
            (<SignupForm setIsLoggedIn={setIsLoggedIn}/>)
          }

          <div style={{
              display: 'flex', 
              width: '100%', 
              alignItems: 'center',         
              gap: '0.5rem',
           }}>
           <div className='ex'></div>
           <p className='or'>OR</p>
           <div className='ex'></div>
          </div>
          {
            formtype === 'login' ? 
            (<button className='btn' onClick={handleGoogleSignIn}>
              <FcGoogle />
              Sign In with Google
             </button>
            ):
            (<button className='btn' onClick={handleGoogleSignIn}>
            <FcGoogle/>
            Sign Up with Google
           </button>)
          }
          <br/>
          <br/>
          <br/>
          <br/>
      </div>
     
        <div className='display' style={{ position: 'relative',float: 'left', width: '91.67%', maxWidth: '450px' }}>
            <img src={FrameImage} alt="Pattern" style={{ width: '580px',position: 'fixed', height: '514px' }} 
             loading='lazy' />
            <img src={image} alt="login" style={{ width: '558px', height: '500px', position: 'fixed', top: '110px', left: '815px' }} 
            loading='lazy'
            
            />
        </div>
    </div>
  )
}

export default Template
