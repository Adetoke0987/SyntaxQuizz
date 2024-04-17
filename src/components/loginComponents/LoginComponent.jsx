import React, { useState } from 'react';
import Inputs from './Inputs';
import Dashboard from '../../pages/dashboard/Dashboard'; // Import Dashboard component

const LoginComponent = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value
    });
  };

  const addUsers = (e) => {
    e.preventDefault();
    if (userDetails.fullname && userDetails.email && userDetails.password) {
      setUsers([userDetails]);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const inputs = [
    {
      labelText: 'Full Name',
      inputType: 'text',
      placeholderText: 'Enter Your Name',
      inputName: 'fullname',
      inputValue: userDetails.fullname
    },
    {
      labelText: 'Working Email',
      inputType: 'email',
      placeholderText: 'Enter Your Email',
      inputName: 'email',
      inputValue: userDetails.email
    },
    {
      labelText: 'Password',
      inputType: 'password',
      placeholderText: 'Enter Your Password',
      inputName: 'password',
      inputValue: userDetails.password
    }
  ];

  return (
    <div>
      <form onSubmit={addUsers}>
        <h1>Welcome to Syntax Quizzez</h1>
        {inputs.map(({ labelText, inputType, inputName, placeholderText, inputValue }) => {
          return (
            <Inputs
              key={inputName}
              labelText={labelText}
              inputType={inputType}
              inputName={inputName}
              placeholderText={placeholderText}
              inputValue={inputValue}
              inputfunc={handleInputChange}
            />
          );
        })}
        <button type="submit">Submit</button>
      </form>

      {users.length > 0 ? <Dashboard user={users[0]} /> : null}
      {/* Render Dashboard component if user is logged in */}
    </div>
  );
};

export default LoginComponent;
