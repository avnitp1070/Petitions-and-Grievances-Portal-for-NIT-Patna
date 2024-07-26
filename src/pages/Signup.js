import React from 'react'
import Template from '../components/Template'
import SignupImg from '../Assets/Signup.jpeg'
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    title='Join the platform!'
    desc1=' Get their grievances addressed by the authorities.'
    desc2='If you are new here, please sign up with us'
    image={SignupImg}
    formtype='signup'
    setIsLoggedIn={setIsLoggedIn}
  />

  )
}

export default Signup
