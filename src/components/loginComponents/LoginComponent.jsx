
import React, { useContext } from 'react'
import Inputs from './Inputs'
import { userData } from './UserContext'
import { Link } from 'react-router-dom'


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
            return(
              <Inputs labelText={labelText} inputType={inputType} inputName={inputName}
               placeholderText={placeholderText} key={labelText} inputValue={inputValue}  />
            )
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
  )
}

export default LoginComponent
 Quizzez</h1>
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
        <button type="submit" onSubmit="()=>(
           return(<Dashboard>)
        )">Submit</button>
      </form>

    </div>
  );
};

export default LoginComponent;

