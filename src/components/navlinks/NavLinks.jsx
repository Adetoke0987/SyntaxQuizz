<<<<<<< HEAD
import { NavLink } from 'react-router-dom'
import './navlink.module.css'

const NavLinks = ({to, children, icon}) => {
  return (
    <>
      <NavLink  to={to}  >
        <div >
            <span>{icon}</span>
            <span>{children}</span>
        </div>
      </NavLink>
    </>
  )
}
  
=======
import { NavLink } from 'react-router-dom'
import './navlink.module.css'

const NavLinks = ({to, children, icon}) => {
  return (
    <>
      <NavLink  to={to}  >
        <div >
            <span>{icon}</span>
            <span>{children}</span>
        </div>
      </NavLink>
    </>
  )
}
  
>>>>>>> parent of f341fdb (update)
export default NavLinks