import React, { useState } from 'react';
import NavLinks from '../navlinks/NavLinks';
import './sidebar.css';
import { IoIosLogOut } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import { MdQuiz } from 'react-icons/md';
import { BsRecord } from 'react-icons/bs';
import { FiSettings } from "react-icons/fi"; // Using FiSettings for general settings icon
import { MdSettingsEthernet } from "react-icons/md"; // Using MdSettingsEthernet for quiz game settings icon

const Sidebar = ({ onLogout }) => {
  // Logout function
  const handleLogout = () => {
    if (typeof onLogout === 'function') {
      onLogout(); 
    }
  };

  // State for managing dropdown menu
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  return (
    <div id="side-wrapper">
      <div id='gold'>
        <div id='links'>
          <NavLinks to="/dashboard/" icon={<FaUser />} label="User Profile" />
          <NavLinks to="/dashboard/quiz" icon={<MdQuiz />} label="Quiz" />
          <NavLinks to="/dashboard/records" icon={<BsRecord />} label="Records" />
          {/* Dropdown for Settings */}
          <div className="dropdown-wrapper">
            <div className="dropdown-header" onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}>
              <span>{showSettingsDropdown ? <FiSettings /> : <MdSettingsEthernet />}</span>
              <span>Settings</span>
            </div>
            {showSettingsDropdown && (
              <div className="dropdown-content">
                <NavLinks to="/dashboard/settings/general">General Settings</NavLinks>
                <NavLinks to="/dashboard/settings/notication">Notifiction Settings</NavLinks>
                <NavLinks to="./dashboard/settings/quizset">Quiz Settings </NavLinks>
                {/* Add more settings links as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div onClick={handleLogout}> {/* Attach onClick event handler */}
        <h3><IoIosLogOut /></h3>
      </div>
    </div>
  );
};

export default Sidebar;
