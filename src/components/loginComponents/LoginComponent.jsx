import React, { useState } from 'react'
import Inputs from './Inputs'

const LoginComponent = () => {

  const [users, setUsers] = useState([])
  const [userDetails, setUserDetails] = useState({
    fullname:"",
    email:"",
    password:""
  })

  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }

  const addUsers= (e)=>{
    e.preventDefault()
    setUsers([
      ...users,
      userDetails
    ])

  
  }

  // An Array containing the input properties from the ./inputs.jsx
  const inputs = [
    {
      labelText: "Full Name",
      inputType: "text",
      placeholderText: "Enter Your Name",
      inputName: "fullname",
      inputValue: userDetails.fullname,
     

    },
    {
      labelText: "Working Email",
      inputType: "email",
      placeholderText: "Enter Your Email",
      inputName: "email",
      inputValue: userDetails.email,
      
    },
    {
      labelText: "Password",
      inputType: "password",
      placeholderText: "",
      inputName: "password",
      inputValue: userDetails.password,

    }
  ]
 

  return (
    <div>
      <form onSubmit={addUsers}>
        <h1>Welcome to Syntax Quizzez</h1>
        {
          inputs.map(({labelText,inputType,inputName,placeholderText,inputValue})=>{
            return(
              <Inputs labelText={labelText} inputType={inputType} inputName={inputName}
               placeholderText={placeholderText} key={labelText} inputValue={inputValue} inputfunc={handleInputChange} />
            )
          })
        }
        <button>Submit</button>

      </form>
    </div>
  )
}

export default LoginComponent
