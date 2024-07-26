import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Guide from './components/Guide';
import { useState,useEffect } from 'react';
import PetitionForm from './components/PetitionForm';
import AboutSection from './components/AboutSection';
import PasswordReset from './components/PasswordReset';
import CombinedPolicy from './components/CombinedPolicy'; 
import PetitionNotLogin from './pages/PetitionNotLogin';
// import Template from './components/Template';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {app} from './Firebase'
import Footer from './pages/Footer';


const auth = getAuth(app);

function App() {
   const [isLoggedIn, setIsLoggedIn] = useState(false); 

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in
            setIsLoggedIn(true);
        } else {
            // No user is signed in
            setIsLoggedIn(false);
        }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
}, []);

  return (
    <div>
       <div className="container">

<Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
<Routes>
  <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn}/>} />
  <Route path="/Guide" element={<Guide />} />
  <Route path="/PasswordReset" element={<PasswordReset />} />
  <Route path="/write" element={isLoggedIn?<PetitionForm />:<PetitionNotLogin/>} />
  <Route path="/about" element={<AboutSection />} />
  <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
  <Route path="/dashboard" element={isLoggedIn?<Home />:<PetitionNotLogin/>} /> 
  <Route path="/policy" element={<CombinedPolicy />} />  
</Routes>
</div>
<div>
<Footer/>
</div>

    </div>
   
  );
}

export default App;
