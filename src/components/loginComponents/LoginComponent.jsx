import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inputs from './Inputs';
import style from "./login.module.css";

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

  // const {email,password} =formData

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        'https://questionsapi.onrender.com/auth/login',
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
  

  const logInInputs = [
    {
      labelText: "Email",
      inputType: "email",
      placeholderText: "Enter Your Email",
      inputName: "email",
      inputValue: formData.email,
    },
    {
      labelText: "Password",
      inputType: "password",
      placeholderText: "Password",
      inputName: "password",
      inputValue: formData.password,
    },
  ];


  return (
    <div className={style.main}>
      <form onSubmit={submitHandler} className={style.loginform}>
      {logInInputs.map(
          ({
            labelText,
            inputType,
            inputName,
            placeholderText,
            inputValue,
          }) => {
            return (
              <Inputs
                inputfunc={handleChange}
                labelText={labelText}
                inputType={inputType}
                inputName={inputName}
                placeholderText={placeholderText}
                key={labelText}
                inputValue={inputValue}
                
              />
            );
          }
        )}
         <div className={style.formSubmit}>
          
            <button type='submit' className={style.button}>Log in</button>
        </div>

        <div className={style.not}>
          <p className={style.p}>Dont have an Account?</p>
          <Link to={"/signup"} className={style.h2}>Register</Link>
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

export default LoginComponent;
