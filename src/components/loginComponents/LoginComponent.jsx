import React, { useContext, useState } from "react";
import Inputs from "./Inputs";
// import Dashboard from '../../pages/dashboard/Dashboard'; // Import Dashboard component
import { userData } from "./UserContext";
import { Link } from "react-router-dom/dist";
import style from "./login.module.css";

const LoginComponent = () => {
  const { users } = useContext(userData);

  const { fullname, password } = users;
  //The Context that will be available on all pages is the users which contains the user detils

  const [userDetails, setUserDetails] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  //A function to handle the changes observed on the input feilds
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const addUsers = (e) => {
    e.preventDefault();
    updateUser([...users, userDetails]);
    setUserDetails({
      fullname: "",
      email: "",
      password: "",
    });

    console.log(users);
  };

  const logInInputs = [
    {
      labelText: "Email",
      inputType: "email",
      placeholderText: "Enter Your Email",
      inputName: "fullname",
      inputValue: fullname,
    },
    {
      labelText: "Password",
      inputType: "password",
      placeholderText: "Password",
      inputName: "passwod",
      inputValue: password,
    },
  ];

  return (
    <div className={style.main}>
      <form onSubmit={addUsers} className={style.loginform}>
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
          <Link to={"/dashboard"}>
            <button className={style.button}>Log in</button>
          </Link>
        </div>
        <div className={style.not}>
          <p className={style.p}>Dont have an Account?</p>
          <Link to={"/signup"} className={style.h2}>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
