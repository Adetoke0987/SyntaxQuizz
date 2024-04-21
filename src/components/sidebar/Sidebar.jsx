import React, { useState } from "react";
import NavLinks from "../navlinks/NavLinks";
import "./sidebar.css";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdQuiz, MdOutlineDisplaySettings } from "react-icons/md";
import { MdQuestionAnswer, MdEditNotifications  } from "react-icons/md";
import { FiSettings } from "react-icons/fi"; // Using FiSettings for general settings icon
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io"; // Using MdSettingsEthernet for quiz game settings icon

const Sidebar = ({ onLogout }) => {
  // Logout function
  const handleLogout = () => {
    if (typeof onLogout === "function") {
      onLogout();
    }
  };

  // State for managing dropdown menu
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  return (
    <div id="side-wrapper">
      <div id="gold">
        <div id="links">
          <NavLinks to="/dashboard/" icon={<FaUser />} label="User Profile" > User Profile</NavLinks> 
          <NavLinks to="/dashboard/quiz" icon={<MdQuiz />} label="Quiz"  > Quiz</NavLinks> 
          <NavLinks
            to="/dashboard/records"
            icon={<MdQuestionAnswer />}
            label="Records"
          >Records</NavLinks>          {/* Dropdown for Settings */}
          <div className="dropdown-wrapper">
            <div
              className="dropdown-header"
              onClick={() => setShowSettingsDropdown(!showSettingsDropdown)}
            >
              <span>
                {showSettingsDropdown ? <IoIosArrowDropright/> : <IoIosArrowDropdown/> }
              </span>
              <span id="drp">Settings</span>
            </div>
            {showSettingsDropdown && (
              <div className="dropdown-content">
                
                <NavLinks
                  to="/dashboard/settings"
                  className="dropdown-links"
                >
                  <FiSettings />General Settings
                </NavLinks>
                <NavLinks
                  to="/dashboard/settings/notification"
                  className="dropdown-links"
                >
                 <MdEditNotifications/> Notification Settings
                </NavLinks>
                <NavLinks
                  to="/dashboard/settings/quizset"
                  className="dropdown-links"
                >
                  <MdOutlineDisplaySettings/> Quiz Settings
                </NavLinks>
                {/* Add more settings links as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="out" onClick={handleLogout}> {/* Attach onClick event handler */}
        <h3><IoIosLogOut /></h3>
      </div>
    </div>
  );
};

export default Sidebar;
