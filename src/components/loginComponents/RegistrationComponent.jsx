import React, { useState } from 'react';
import './signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [tooltipMessage, setTooltipMessage] = useState(''); // State to manage tooltip message
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        'https://questionsapi.onrender.com/auth/signup',
        formData
      );

      console.log('Signup successful:', response.data);
      setTooltipMessage('Signup successful: ' + response.data); // Set success tooltip message with response data
      setTimeout(() => {
        setTooltipMessage(''); // Clear the tooltip message after 5 seconds
        navigate('/login'); // Navigate to login page after clearing the tooltip
      }, 5000); // Delay in milliseconds
    } catch (error) {
      console.error('Signup failed:', error.response.data);
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="firstName"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
        />
        <input
          type="text"
          placeholder="lastName"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={handleChange}
          name="password"
          value={formData.password}
        />
        <button type="submit">Sign up</button>
      </form>
      {tooltipMessage && (
        <div className="tooltip">
          {tooltipMessage}
        </div>
      )}
    </>
  );
};

export default RegistrationComponent;
