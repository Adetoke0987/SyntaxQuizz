import React, { useState } from "react";
import NavLinks from "../navlinks/NavLinks";
import { Link } from "react-router-dom";
import style from "./sidebar.module.css";
import { IoIosLogOut } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdQuiz, MdOutlineDisplaySettings } from "react-icons/md";
import { MdQuestionAnswer, MdEditNotifications } from "react-icons/md";
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

  const change = () => {
    const changed = !showSettingsDropdown;
    setShowSettingsDropdown(changed);
  };

  return (
    <div id={style.sidewrapper}>
      <div id={style.gold}>
        <div id={style.links}>
          <NavLinks to="/dashboard/" icon={<FaUser />} label="User Profile" className={style.linktext}>
             User Profile
          </NavLinks>
          <NavLinks to="/dashboard/quiz" icon={<MdQuiz />} label="Quiz">
            {" "}
            Quiz
          </NavLinks>
          <NavLinks
            to="/dashboard/records"
            icon={<MdQuestionAnswer />}
            label="Records"
          >
            Records
          </NavLinks>{" "}
          {/* Dropdown for Settings */}
          <div className="dropdown-wrapper">
            <div
              className="dropdown-header"
              onClick={change}
            >
              <span>
                {showSettingsDropdown ? (
                  <IoIosArrowDropdown />
                ) : (
                  <IoIosArrowDropright />
                )}
              </span>
              <span id="drp">Settings</span>
            </div>
            {showSettingsDropdown && (
              <div className="dropdown-content">
                <NavLinks to="/dashboard/settings" className="dropdown-links">
                  <FiSettings />
                  General Settings
                </NavLinks>
                <NavLinks
                  to="/dashboard/settings/notification"
                  className="dropdown-links"
                >
                  <MdEditNotifications /> Notification Settings
                </NavLinks>
                <NavLinks
                  to="/dashboard/settings/quizset"
                  className="dropdown-links"
                >
                  <MdOutlineDisplaySettings /> Quiz Settings
                </NavLinks>
                {/* Add more settings links as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="out" onClick={handleLogout}>
       
      <Link to="/dashboard/logout"> 
          <h3>
            <IoIosLogOut />
          </h3>
        </Link> 
       
      </div>
    </div>
  );
};

export default Sidebar;
