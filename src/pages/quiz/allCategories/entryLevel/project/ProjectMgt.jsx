import React from 'react'
import "./project.css"
import { NavLink } from 'react-router-dom'
const ProjectMgt = () => {
  return (
    <NavLink to="/dashboard/quiz/projectET">
      <div className= 'project quizBox' >
        <h3 id='title'>Project Management</h3>
    </div>
    </NavLink>
  )
}

export default ProjectMgt