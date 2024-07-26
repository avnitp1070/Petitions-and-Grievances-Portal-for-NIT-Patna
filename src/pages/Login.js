import React from 'react'
import Template from '../components/Template'
import loginImage from '../Assets/Login.png'
const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title='Welcome Back!'
      desc1=' Get their grievances addressed by the authorities.'
      desc2='If you have already registered, please sign in!'
      image={loginImage}
      formtype='login'
      setIsLoggedIn={setIsLoggedIn}
    />
    
  )
}

export default Login
