import React from 'react'
import "./logic.css"
import { NavLink } from 'react-router-dom'
const LogisticsProf = () => {
  return (
   <>
     <NavLink to="/dashboard/quiz/logicPF">
       <div className= 'logic quizBox'>
            <h3 id='title'>Logistics</h3>
      </div>
     </NavLink>
   </>
  )
}

export default LogisticsProf