import React, { useState } from 'react';
import './PetitionForm.css';
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';
import {app} from '../Firebase';
import { getFirestore ,collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app);

const PetitionForm = () => {
  const navigate = useNavigate();

  const [issue, setIssue] = useState(''); // State for issue field
  const [description, setDescription] = useState(''); // State for description field\
  const [email, setEmail] = useState(''); // State for email field

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission behavior
  //   console.log('Issue:', issue); // Example: Log the issue and description to console
  //   console.log('Description:', description);
  //   console.log('Email:', email);
  //   toast.success('Form Submitted successfully', {
  //     position: "top-center"
  //   });
  //   setIssue(''); // Clear the form after submission (optional)
  //   setDescription('');
  //   setEmail('');
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, 'petitions'), {
        issue,
        email,
        description,
        votes: 0
    });
    toast.success('Form Submitted successfully', {
          position: "top-center"
        });
    navigate('/dashboard');
    setIssue('');
    setDescription('');
    setEmail('');
};

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a new Petition: Share Your Grievances</h2>
      <label htmlFor="issue">Issue:</label>
      <input
        type="text"
        id="issue"
        value={issue}
        placeholder='Eg: Lack of water supply in hostel...'
        onChange={(e) => setIssue(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        placeholder='Enter your email...'
        onChange={(e) => setEmail(e.target.value)}
        required
      />


      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        placeholder='Include your name, branch, and year at the end of your post.Describe your issue in detail...'
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Petition</button>
    </form>
  );
};

export default PetitionForm;
