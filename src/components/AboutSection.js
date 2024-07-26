import React from 'react';
import './AboutSection.css'; // Import the CSS file

const AboutSection = () => {
  return (
    <div className="about-section">
      {/* Hero Section */}
      <section className="about-hero">
        {/* <h2>About Petitions and Grievances Portal</h2> */}
        <p>
          Welcome to the Petitions Writing Portal for the National
          Institute of Technology (NIT) Patna. We believe in fostering an open
          environment where every voice is heard and addressed.
        </p>
      </section>

      {/* Mission Section */}
      <section className="about-mission">
        <h3>Our Mission</h3>
        <ul>
          <li>
            <b>Ensure Accountability:</b> Provide a systematic way for individuals to raise their issues and ensure they are addressed by the relevant authorities.
          </li>
          <li>
            <b>Promote Transparency:</b> Maintain an open and transparent process for submitting and tracking petitions and grievances.
          </li>
          <li>
            <b>Foster Communication:</b> Enhance communication between students, faculty, and administration, promoting a collaborative environment for problem-solving.
          </li>
          <li>
            <b>Support Community:</b> Empower members of our community to voice their concerns and contribute to the continuous improvement of our institution.
          </li>
        </ul>
      </section>

      {/* Commitment Section */}
      <section className="about-commitment">
        <h3>Commitment to Improvement</h3>
        <p>
          We are committed to continually improving our processes and the overall
          experience for our community. Your feedback is invaluable in helping
          us achieve this goal. Whether you have a suggestion, a complaint, or an
          idea for improvement, we are here to listen and take action.
        </p>
        <p>Thank you for being an active part of the NIT Patna community. Together, we can make a difference.</p>
      </section>

      {/* Contact Section */}
      <section className="about-contact">
        <h3>Contact Us</h3>
        <p>
          <b>Email:</b>{' '}
          <a href="mailto:petitions@nitp.ac.in">petitions@nitp.ac.in</a>
        </p>
        <p>
          <b>Phone:</b> +91-1234-567890
        </p>
        <p>
          <b>Office:</b> Room 101, Administration Building, NIT Patna
        </p>
      </section>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default AboutSection;
