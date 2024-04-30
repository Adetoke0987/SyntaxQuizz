import React from 'react'
import "./markt.css"
import { NavLink } from 'react-router-dom'
const MarketingProf = () => {
  return (
   <>
     <NavLink to="/dashboard/quiz/marktPF">
       <div className= 'mkt quizBox'>
           <h3 id='title'>Marketing</h3>
       </div>
     </NavLink>
   </>
  )
}

export default MarketingProf


