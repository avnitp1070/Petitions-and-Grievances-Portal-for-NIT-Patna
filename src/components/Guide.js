import React from 'react';
import './Guide.css';

const Guide = () => {
  return (
    <div className="guide">
      <section className="guide-section">
        <h1>Features</h1>
        <ul>
          <li>
            <strong>Voice Your Concerns:</strong> Raise issues you believe need addressing by the administration.
          </li>
          <li>
            <strong>Community-Driven:</strong> Posts with high upvotes gain the administration's attention.
          </li>
          <li>
            <strong>Downvote Irrelevant Posts:</strong> Help maintain the platform's quality by downvoting irrelevant content.
          </li>
        </ul>
      </section>

      <section className="guide-section">
        <h1>Instructions</h1>
        <ul>
          <li><strong>Be Respectful:</strong> Maintain a positive and constructive tone in your posts.</li>
          <li><strong>Keep it Concise:</strong> Craft impactful messages that get straight to the point.</li>
          <li><strong>Identify Yourself:</strong> Include your name, branch, and year at the end of your post.</li>
          <li><strong>Focus on Community Issues:</strong> Address concerns that affect a large group of students.</li>
          <li><strong>Questions or Feedback?</strong> Feel free to reach out for any inquiries or suggestions!</li>
        </ul>
      </section>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Guide;
