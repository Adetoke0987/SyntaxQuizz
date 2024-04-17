import React, { useState } from 'react';
import Inputs from './Inputs';
import Dashboard from '../../pages/dashboard/Dashboard'; // Import Dashboard component

const LoginComponent = () => {
  const{users} = useContext(userData)

  const {fullname, password} = users
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
        inputValue:password,

      },
  ]

  return (
    <div>
    
      <h2>Login</h2>

        <form onSubmit={null}>
         {
              logInInputs.map(({labelText,inputType,inputName,placeholderText,inputValue})=>{
            <Inputs labelText={labelText} inputType={inputType} inputName={inputName}
            placeholderText={placeholderText} key={labelText} inputValue={inputValue}  />
                
              })
            }
            <Link to={"/"}>
          <button>Log in</button>
        </Link>

        <div>
            <p>Dont have an Account?</p>
            <Link to={'/signup'}>Register</Link>
        </div>
      </form>


    </div>


  );
};

export default LoginComponent;
