import React from 'react'
import { useState } from 'react'
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import { toast } from 'react-toastify'
import "./SignUpForm.css"
import { useNavigate } from 'react-router-dom'

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import {app} from '../Firebase'

const auth = getAuth(app);

const SignUpForm = ({setIsLoggedIn}) => {

    const [formData,setFormData]=useState({ 
        firstname: '',lastname: '',email: '',password: '',confirmpassword: ''})
    const navigate=useNavigate();
        // const submitHandler=(e)=>{
        //     e.preventDefault();
        //     if(formData.password!==formData.confirmpassword){
        //         toast.error('Password does not match', {
        //             position: "top-center"
        //           })
        //     }
        //     else{
        //         setIsLoggedIn(true);
        //         toast.success('Account created successfully', {
        //             position: "top-center"
        //           });
        //         navigate("/dashboard");
        //     }
        // }
        const[showPassword,setShowPassword]=useState(false) 
        const[showPassword1,setShowPassword1]=useState(false) 


        const submitHandler = async (e) => {
            e.preventDefault();
            if (formData.password !== formData.confirmpassword) {
              toast.error('Password does not match', {
                position: "top-center"
              });
            } else {
              try {
                const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
                console.log('User created successfully:', userCredential.user);
                setIsLoggedIn(true);
                toast.success('Account created successfully', {
                  position: "top-center"
                });
                navigate("/dashboard");
              } catch (error) {
                console.error('Signup error:', error);
                toast.error('Signup failed: ' + error.message, {
                  position: "top-center"
                });
              }
            }
          };
        

        const ChangeHandler=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
    }

  return (
    <div >
      {/* <div className="button-container">
        <button>
            Student
        </button>
        <button>
            Administrator
        </button>
      </div> */}

        <form className="form-container" onSubmit={submitHandler}>
        <div>
        <label>
            <p>
                First Name<sup>*</sup>
            </p>
            <input
                required
                type="text"
                name='firstname'
                onChange={ChangeHandler}
                placeholder="Enter First name"
                value={formData.firstname}
            />  
        </label>

        <label>
            <p>
                Last Name<sup>*</sup>
            </p>
            <input
                required
                type="text"
                name='lastname'
                onChange={ChangeHandler}
                placeholder="Enter Last name"
                value={formData.lastname}
            />
        </label>
        </div>

        <label>
            <p>
                Email Address<sup>*</sup>
            </p>
            <input
                required
                type="email"
                name='email'
                onChange={ChangeHandler}
                placeholder="Enter Email Address"
                value={formData.email}
            />
        </label>

        {/* Create password and confirm password */}

        <div>
          
            <label>
                <p>
                    Create Password<sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? 'text' : 'password'}

                    name='password'
                    onChange={ChangeHandler}
                    placeholder="Enter Password"
                    value={formData.password}
                />
                <span className='eye' onClick={()=> setShowPassword((prev)=>!prev)}>
        {showPassword ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
      </span>

            </label>

            <label>
                <p>
                    Confirm Password<sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword1 ? 'text' : 'password'}
                    name='confirmpassword'
                    onChange={ChangeHandler}
                    placeholder="Confirm Password"
                    value={formData.confirmpassword}
                />
                <span className='eye' onClick={()=> setShowPassword1((prev)=>!prev)}>    
        {showPassword1 ? (<AiOutlineEyeInvisible/>): (<AiOutlineEye/>)}
        </span>
                </label>

        </div>

        <button>
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignUpForm
