import React from 'react';
import './Dashboard.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const PetitionNotLogin = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="centered-section" style={{padding: '200px 20px', }}>
      <p>Register or log in to write your grievances and track their status.</p>
      <button onClick={() => handleNavigation('/signup')} className="action-button">Sign Up</button>
      <button onClick={() => handleNavigation('/login')} className="action-button">Sign In</button>
    </section>
  );
};

export default PetitionNotLogin;
