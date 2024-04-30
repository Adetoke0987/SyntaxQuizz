import React from 'react'
import "./project.css"
import { NavLink } from 'react-router-dom'
const ProjectMgtProf = () => {
  return (
    <>
      <NavLink to="/dashboard/quiz/projectPF">
        <div className= 'project quizBox'>
            <h3 id='title'>Project Management</h3>
        </div>
      </NavLink>
    </>
  )
}

export default ProjectMgtProf