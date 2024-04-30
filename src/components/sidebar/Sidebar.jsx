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

    localStorage.removeItem("accessToken"); 

    window.location.href = "/login"; 
  
  };
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);

  const change = () => {
    const changed = !showSettingsDropdown;
    setShowSettingsDropdown(changed);
  };
  const sideBarLinks = [
    {
      to: "/dashboard",
      icon: <FaUser />,
      children: "User Profile",
    },
    {
      to: "/dashboard/quiz",
      icon: <MdQuiz />,
      children: "Quizz",
    },
    {
      to: "/dashboard/records",
      icon: <MdQuestionAnswer />,
      children: "Records",
    },
  ];
  const dropDown = [
    {
      to: "/dashboard/settings",
      icon: <FiSettings />,
      children: "General Settings",
    },
    {
      to: "/dashboard/settings/notification",
      icon: <MdEditNotifications />,
      children: "Notification Settings",
    },
    {
      to: "/dashboard/settings/quizset",
      icon: <MdOutlineDisplaySettings />,
      children: "Quiz Settings",
    },
  ];

  return (
    <div id={style.sidewrapper}>
      <div id={style.gold}>
        <div id={style.links}>
          {sideBarLinks.map(({ to, children, icon }) => (
            <NavLinks
              key={to}
              to={to}
              children={children}
              icon={icon}
              className={style.a}
            />
          ))}
          {/* Dropdown for Settings */}
          <div>
            <div
              onClick={change}
              className={`${style.drop} ${
                showSettingsDropdown ? style.active : ""
              }`}
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
              <div className={style.dropInfo}>
                {dropDown.map(({ to, icon, children }) => (
                  <NavLinks
                    to={to}
                    children={children}
                    icon={icon}
                    className={style.dropped}
                  />
                ))}
                {/* Add more settings links as needed */}
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="out" onClick={handleLogout}>
        <Link to="../../../pages/dashboard/logout/logout.jsx">
          <h3>
            <IoIosLogOut />
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
