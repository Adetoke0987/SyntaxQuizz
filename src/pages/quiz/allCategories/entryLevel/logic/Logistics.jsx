import React from 'react'
import "./logic.css"
import { NavLink } from 'react-router-dom'
const Logistics = () => {
  return (
    <NavLink to="/dashboard/quiz/logicET">
       <div className= 'logic quizBox'>
        <h3 id='title'>Logistics</h3>
    </div>
    </NavLink>
  )
}

export default Logistics