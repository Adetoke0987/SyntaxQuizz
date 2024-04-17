import React from 'react';
import NavLinks from '../navlinks/NavLinks';
import './sidebar.css';
import { IoIosLogOut } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import { BsRecord } from 'react-icons/bs';
import { CiSettings } from "react-icons/ci";
const links = [
  { to: '/dashboard/', icon: <FaUser />, label: 'User Profile', id: 1 },
  { to: '/dashboard/quiz', icon: <MdQuiz />, label: 'Quiz', id: 2 },
  { to: '/dashboard/records', icon: <BsRecord />, label: 'Records', id: 3 },
  { to: '/dashboard/settings', icon: <CiSettings />, label: 'Settings', id: 4 },
];

const Sidebar = ({ onLogout }) => {
  // Logout function
  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout(); 
    }
  };

  return (
    <div id="side-wrapper">
      <div id='gold'>
        <div id='links'>
          {links.map(({ to, icon, label, id }) => (
            <NavLinks key={id} to={to}>
              {icon} {label}
            </NavLinks>
          ))}
        </div>
      </div>
      <div onClick={handleLogout}> {/* Attach onClick event handler */}
        <h3><IoIosLogOut /></h3>
      </div>
    </div>
  );
};

export default Sidebar;
