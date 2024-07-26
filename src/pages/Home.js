import React from 'react'
import PetitionList from '../components/PetitionList'

const Home = () => {
  return (
    <div >
       <h2 style={{ color: 'grey', textAlign: 'center' }}>Upvote important posts for admin attention & downvote irrelevant ones to keep focus on key issues.</h2>
       <PetitionList/>
    </div>
   
  )
}

export default Home
