import React from 'react'
import "./mrkt.css"
import { NavLink } from 'react-router-dom'
const Marketing = () => {
  return (
   <NavLink to="/dashboard/quiz/marktET">
      <div className= 'mkt quizBox'>
        <h3 id='title'>Marketing</h3>
     </div>
   </NavLink>
  )
}

export default Marketing