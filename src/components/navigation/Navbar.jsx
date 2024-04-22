
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FcMenu } from 'react-icons/fc';
import { IoShareOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import syntax from '../../../src/assets/syntax.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const data = !isOpen
    setIsOpen(data);
  };


  return (
    <nav className="navbar-container">
      <div className="text2">
        <div onClick={toggleMenu} className="text">
          {isOpen ? <IoMdClose /> : <FcMenu />}
        </div>
        {isOpen && (
          <div className="links-container">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/help" className="nav-link">
              Help
            </NavLink>
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/signup" className="nav-link">
              Sign up
            </NavLink>
            <i className="fa fa-search search-icon"></i>
            <NavLink to="/signup" className="create-button">
              Create Quiz
            </NavLink>

          </div>

        )}
      </div>


      <div className="logo-container">
        {/* <NavLink to="/"> */}
          <img src={syntax} alt="logo" className="logo" />
        {/* </NavLink> */}
      </div>

      <div>
        <IoShareOutline />
      </div>
    </nav>
  );
};

export default Navbar;

