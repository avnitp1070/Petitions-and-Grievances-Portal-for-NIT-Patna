import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css';
import { useNavigate } from 'react-router-dom'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai' 
import { toast } from 'react-toastify'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../Firebase';

const auth = getAuth(app);

const LoginForm = ({setIsLoggedIn}) => {
    const [formData,setFormData]=useState({ email: '',password: ''})

    const navigate=useNavigate();
    const[showPassword,setShowPassword]=useState(false)

    // const submitHandler=(e)=>{
    //     e.preventDefault();
    //     setIsLoggedIn(true);
    //     toast.success('Logged in successfully', {
    //       position: "top-center"
    //     });
    //     navigate("/dashboard");
    // }

    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
        console.log('User signed in successfully:', userCredential.user);
        setIsLoggedIn(true);
        toast.success('Logged in successfully', {
          position: "top-center"
        });
        navigate("/dashboard");
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed: ' + error.message, {
          position: "top-center"
        });
      }
    };


    const ChangeHandler=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
}
  

  return (
    <form className="form-container" onSubmit={submitHandler}>
     <label>
       <p>
        Email Address<sup>*</sup>
       </p>
      <input 
      required
      type="email"
      value={FormData.email}
      onChange={ChangeHandler}
      placeholder='Enter your email address'
      name='email'
      />
    </label>

    <label>
       <p>
        Password<sup>*</sup>
       </p>
      <input 
      required
      type={showPassword ? 'text' : 'password'}
      value={FormData.password} 
      onChange={ChangeHandler}
      placeholder='Enter password'
      name='password'
      />
      <span className='eye' onClick={()=> setShowPassword((prev)=>!prev)}>
        {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
      </span>
      <Link to="/PasswordReset">
      <p>
        Forgot Password?
      </p>
      </Link>
    </label>

    <button>
        Sign In
    </button>
    </form>
  )
}

export default LoginForm
