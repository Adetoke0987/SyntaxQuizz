import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginComponent = () => {
  const [formData, setFormData] = useState({
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
        'https://questionsapi.onrender.com/auth/users',
        formData
      );
      const token = response.data.data.token;
      localStorage.setItem('token', token);
      console.log('Sign In successful:', token);
      setTooltipMessage('Login successful'); // Set success tooltip message
      setTimeout(() => {
        setTooltipMessage(''); // Clear the tooltip message after 5 seconds
        navigate('/dashboard'); // Navigate to dashboard after clearing the tooltip
      }, 5000); // Delay in milliseconds
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  return (
    <>
      <form onSubmit={submitHandler}>
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
        <button type="submit">Log in</button>
      </form>
      {tooltipMessage && (
        <div className="tooltip">
          {tooltipMessage}
        </div>
      )}
    </>
  );
};

export default LoginComponent;
