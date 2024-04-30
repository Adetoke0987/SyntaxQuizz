import React from 'react'
import "./hr.css"
import { NavLink } from 'react-router-dom'
const HumanR = () => {
  return (
    <NavLink to="/dashboard/quiz/hrET">
       <div className= 'hr quizBox'>
          <h3 id='title'>Human Resource</h3>
     </div>
    </NavLink>
  )
}

export default HumanR