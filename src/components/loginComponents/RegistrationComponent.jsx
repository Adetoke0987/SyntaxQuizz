import React, { useContext, useState } from 'react'
import Inputs from './Inputs'
import { userData } from './UserContext'
import { Link } from 'react-router-dom'
import style from './login.module.css'
const RegistrationComponent = () => {
  
     //The Context that will be available on all pages is the users which contains the user detils
  const {users, updateUser} = useContext(userData)


  const [userDetails, setUserDetails] = useState({
    fullname:"",
    email:"",
    password:""
  })

  //A function to handle the changes observed on the input feilds
  const handleInputChange = (e)=>{
    const {name, value} = e.target
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }

  const addUsers= (e)=>{
    e.preventDefault()
    updateUser([
      ...users,
      userDetails
    ])
    setUserDetails({
      fullname:"",
      email:"",
      password:""
    })

    console.log(users);



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
    <div>
    <img src="../components/loginComponents/RegistrationComponent" alt="" />
  </div>
      <form onSubmit={addUsers}>
        <h1>Welcome to Syntax Quizzez</h1>
        <h2>Register Your Account</h2>
        {
          inputs.map(({labelText,inputType,inputName,placeholderText,inputValue})=>{
            return(
              <Inputs labelText={labelText} inputType={inputType} inputName={inputName}
               placeholderText={placeholderText} key={labelText} inputValue={inputValue} inputfunc={handleInputChange} />
            )
          })
        }
      <div className={style.formSubmit}>
        <button>Submit</button>

        <div className={style.loginOption}>
          <p>Have an Account?</p>
          <Link to='/login'> <h3>Login</h3> </Link>
        </div>
      </div>


      </form>
      



    </div>
   
  )
}

export default RegistrationComponent
