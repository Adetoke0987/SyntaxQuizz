import React, { useContext } from "react";
import Inputs from "./Inputs";
// import Dashboard from '../../pages/dashboard/Dashboard'; // Import Dashboard component
import { userData } from "./UserContext";
import { Link } from "react-router-dom/dist";
import style from "./login.module.css";

const LoginComponent = () => {
  const { users } = useContext(userData);

  const { fullname, password } = users;
  const logInInputs = [
    {
      labelText: "Full Name Or Email",
      inputType: "text",
      placeholderText: "Enter Your Name",
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
      <div className={style.img}>
        {/* <img src="" alt="" /> */}
      </div>
      <form onSubmit={null}>
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
            <button>Log in</button>
          </Link>
        </div>
        <div className={style.not}>
          <p className={style.p}>Dont have an Account?</p>
          <Link to={"/signup"}>Register</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginComponent;
