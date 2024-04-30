import React from 'react'
import "./biz.css"
import { NavLink } from 'react-router-dom';
const BusinessAdminProf = () => {
  return (
    <>
      <NavLink to="/dashboard/quiz/busAdminPF">
        <div className= 'ba quizBox'>
            <h3 id='title'>Business Administration</h3>
        </div>
      </NavLink>
    </>
  )
}

export default BusinessAdminProf;