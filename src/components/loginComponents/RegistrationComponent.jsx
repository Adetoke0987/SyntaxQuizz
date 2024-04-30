import React, { useState } from 'react';
import './login.module.css';
// import './signup.css';
import axios from 'axios';
import style from "./login.module.css"
import { Link, useNavigate } from 'react-router-dom';
import Inputs from './Inputs';

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

  const inputs = [
    {
      labelText: "First Name",
      inputType: "text",
      placeholderText: "Enter Your Name",
      inputName: "firstName",
      inputValue: formData.firstName,
    },
    {
      labelText: "Last Name",
      inputType: "text",
      placeholderText: "Enter Your Name",
      inputName: "lastName",
      inputValue: formData.lastName,
    },

    {
      labelText: "Working Email",
      inputType: "email",
      placeholderText: "Enter Your Email",
      inputName: "email",
      inputValue: formData.email,
    },
    {
      labelText: "Password",
      inputType: "password",
      placeholderText: "",
      inputName: "password",
      inputValue: formData.password,
    },
  ];
  return (
    <div className={style.main}>
      <form onSubmit={submitHandler} className={style.registerform}>
      <h2 className={style.h2}>Register Your Account</h2>
        {inputs.map(
          ({
            labelText,
            inputType,
            inputName,
            placeholderText,
            inputValue,
          }) => {
            return (
              <Inputs
                labelText={labelText}
                inputType={inputType}
                inputName={inputName}
                placeholderText={placeholderText}
                key={labelText}
                inputValue={inputValue}
                inputfunc={handleChange}
              />
            );
          }
        )}
        <button type="submit" className={style.button}>Sign up</button>

        <div className={style.not}>
          <p className={style.p}>Have an Account?</p>

          <Link to="/login" className={style.h2}> Login</Link>
        </div>
      </form>
      {tooltipMessage && (
        <div className="tooltip">
          {tooltipMessage}
        </div>
      )}
    </div>
    
  );
};

export default RegistrationComponent;
