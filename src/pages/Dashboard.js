import React from 'react';
import './Dashboard.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const Dashboard = ({isLoggedIn}) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to NIT Patna Petitions & Grievances Portal</h1>
        <p>Empowering students to voice their concerns and get them addressed by the authorities.</p>
      </header>
      <main className="dashboard-content">
        <section className="feature">
          <h2>Voice Your Concerns</h2>
          <p>Submit your petition and describe the problem in detail to get the administration's attention.</p>
          <button onClick={() => handleNavigation('/write')} className="action-button">Submit a Petition</button>
        </section>
        <section className="feature">
          <h2>Community-Driven</h2>
          <p>Support issues you care about by upvoting relevant posts. Posts with high upvotes gain the administration's attention.</p>
          <button onClick={() => handleNavigation('/dashboard')} className="action-button">View Petitions</button>
        </section>
        <section className="feature">
          <h2>Maintain Quality</h2>
          <p>Downvote irrelevant content to ensure the focus remains on the most pressing issues.</p>
          <button onClick={() => handleNavigation('/dashboard')} className="action-button">View Petitions</button>
        </section>
        {
          !isLoggedIn && ( <section className="centered-section">
            {/* <h2>Sign Up or Login</h2> */}
            <p>Register or log in to write your grievances and track their status.</p>
            <button onClick={() => handleNavigation('/signup')} className="action-button">Sign Up</button>
            <button onClick={() => handleNavigation('/login')} className="action-button">Sign In</button>
          </section>)

        }
       
      </main>
    </div>
  );
};

export default Dashboard;
