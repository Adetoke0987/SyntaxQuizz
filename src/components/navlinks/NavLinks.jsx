import { NavLink } from 'react-router-dom'
import './navlink.module.css'

const NavLinks = ({to, children, icon, className}) => {
  return (
    <>
      <NavLink  to={to} className={className}>
        <div >
            <span>{icon}</span>
            <span>{children}</span>
        </div>
      </NavLink>
    </>
  )
}
  
export default NavLinks