import React from 'react'

import "./acct.css"
import { NavLink } from 'react-router-dom';
const AccountingProf = () => {
  return (
     <NavLink to= "/dashboard/quiz/accountingPF">
      <div className= 'acct quizBox'>
        <h3 id='title'>Accounting</h3>
    </div>
     </NavLink>
  )
}

export default AccountingProf;