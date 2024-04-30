import React, { useState } from 'react';
// import { useColorMode } from '../../../context/ColorModeContext';
import './css/settings.css'

const Settings = () => {


  // const { isDarkMode, toggleColorMode, theme } = useColorMode();

  // State variables for user settings
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission (assuming a form exists)
  const handleSubmit = (event) => {
    event.preventDefault();

    
    // Clear form fields after submission (optional)
    setFullName('');
    setEmail('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="general-settings" >
      <h2>General Settings</h2>
      <form onSubmit={handleSubmit}>
        <input type="file"/>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="currentPassword">Current Password:</label>
        <input
          type="password"
          id="currentPassword"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm New Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Update Settings</button>


        {/* <button onClick={event => { { toggleColorMode; } }}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button> */}
        
      </form>
    </div>
  );
};

export default Settings;
