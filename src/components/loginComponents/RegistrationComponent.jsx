import React, { useContext, useState } from "react";
import Inputs from "./Inputs";
import { userData } from "./UserContext";
import { Link } from "react-router-dom";
import style from "./login.module.css";
import axios from 'axios';

const RegistrationComponent = () => {
  const { users, updateUser } = useContext(userData);
  const [userDetails, setUserDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [tooltipMessage, setTooltipMessage] = useState(""); // State to manage tooltip message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const addUsers = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://questionsapi.onrender.com/auth/signup',
        userDetails
      );
      setTooltipMessage("User successfully registered"); // Set success tooltip message
      updateUser([...users, userDetails]);
      setUserDetails({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
    } catch (error) {
      setTooltipMessage("Invalid user details"); // Set error tooltip message
      console.error('Signup failed:', error.response.data);
    }
  };

  const inputs = [
    {
      labelText: "First Name",
      inputType: "text",
      placeholderText: "Enter Your First Name",
      inputName: "firstname",
      inputValue: userDetails.firstname,
    },
    {
      labelText: "Last Name",
      inputType: "text",
      placeholderText: "Enter Your Last Name",
      inputName: "lastname",
      inputValue: userDetails.lastname,
    },
    {
      labelText: "Email",
      inputType: "email",
      placeholderText: "Enter Your Email",
      inputName: "email",
      inputValue: userDetails.email,
    },
    {
      labelText: "Password",
      inputType: "password",
      placeholderText: "Enter Your Password",
      inputName: "password",
      inputValue: userDetails.password,
    },
  ];

  return (
    <div className={style.main}>
      <form onSubmit={addUsers} className={style.registerform}>
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
                inputfunc={handleInputChange}
              />
            );
          }
        )}
        <div className={style.formSubmit}>
          <button type="submit" className={style.button}>Submit</button>
          {tooltipMessage && <span className={style.tooltip}>{tooltipMessage}</span>}
        </div>
        <div className={style.not}>
          <p className={style.p}>Have an Account?</p>
          <Link to="/login" className={style.h2}> Login</Link>
        </div>
      </form>
    </div>
  );
};

export default RegistrationComponent;
