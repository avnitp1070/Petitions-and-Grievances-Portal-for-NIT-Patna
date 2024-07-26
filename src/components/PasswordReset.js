// src/components/PasswordReset.js

import React, { useState } from 'react';
import { auth } from '../Firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import { toast } from 'react-toastify';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success('Password reset email sent successfully', {
        position: "top-center"
      });
    } catch (error) {
      toast.error('Failed to send password reset email', {
        position: "top-center"
      });
      console.error("Error sending password reset email:", error);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Reset Your Password</h2>
      <form onSubmit={handlePasswordReset}>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default PasswordReset;
