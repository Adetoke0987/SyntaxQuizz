import React from 'react'
import "./ict.css"
import { NavLink } from 'react-router-dom'
const IctProf = () => {
  return (
   <>
     <NavLink to="/dashboard/quiz/ictPF">
      <div className= 'ict quizBox'>
        <h3 id='title'>Information Technology</h3>
      </div>
     </NavLink>
   </>
  )
}

export default IctProf