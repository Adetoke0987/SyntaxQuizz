import React from 'react'
import "./add.css"
import { NavLink } from 'react-router-dom'
const AddQuestionsProf = () => {
  return (
    <>
       <NavLink to="/signup">
          <div id='add' className= 'add quizBox'>
            <h3 id='titleA'>+</h3>
         </div>
       </NavLink>
    </>
  )
}

export default AddQuestionsProf