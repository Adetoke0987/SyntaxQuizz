import React from 'react'
import "./acct.css"
import { NavLink } from 'react-router-dom';

const Accounting = () => {

  return (
    <>
      
       <NavLink to="/dashboard/quiz/accountingET">
         <div className= 'acct quizBox'>
            <h3 id='title'>Accounting</h3>
        </div>
       </NavLink>

    </>
  )
}

export default Accounting;



