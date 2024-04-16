import React from 'react'
import NavLinks from '../navlinks/NavLinks'
import './sidebar.css'
import { FaUser } from "react-icons/fa";
import {AiOutlineSetting} from 'react-icons/ai'
import { IoIosLogOut } from "react-icons/io";
import { MdQuiz } from "react-icons/md";

const links = [
    {to: "/dashboard/user", icon: <FaUser/>, label: "User Profile", id: 1},
    {to: '/dashboard/quiz', icon:<MdQuiz/>, label: "Quiz", id: 2},
    {to: "/dashboard/settings", icon: <AiOutlineSetting/>, label: "Settings", id: 3},
]
const Sidebar = () => {
    return (
        <div id="side-wrapper">
            {/* <div className='logo'>
                <h1>Syntax</h1>
            </div> */}
          <div id='gold'>
          <div id='links'>
           {
             links.map(({to, icon, label, id}) => (
                <NavLinks key={id} to={to}> {icon} {label}</NavLinks>
                ))
           }
          </div>
          </div>
          <div>
            <h3><IoIosLogOut /></h3>
          </div>
        </div>
      )
    }

export default Sidebar