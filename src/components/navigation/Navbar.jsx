
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { FcMenu } from 'react-icons/fc';
import { IoShareOutline } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import syntax from '../../../src/assets/logo2.png'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const data = !isOpen
    setIsOpen(data);
  };
  // const revealLinks = ()=>{
  //   const links = document.querySelectorAll(`${style.navlink}`)
  //   links.forEach((links,index)=>{
  //     setTimeout(()=>{
  //       links.classList.add(`${style.show}`)
  //     },500 * index)
  //   })
  // }

  // const hideLinks =()=>{
  //   const links = document.querySelectorAll(`${style.navlink}`)
  //   links.forEach((links,index)=>{
  //     setTimeout(()=>{
  //       links.classList.remove(`${style.show}`)
  //     },100 * index)
  //   })
  // }

  // const handleMenuClick = () => {
  //   toggleMenu();
  //   if (!isOpen) {
  //     revealLinks();
  //   } else {
  //     hideLinks();
  //   }
  // };


  return (
    <nav className={style.navbarContainer}>
      <div className={style.text2}>
        <div onClick={toggleMenu} >
          {isOpen ? <IoMdClose /> : <span className={style.hamburger}>≡</span>}
        </div>
        {isOpen && (
            <div className={style.linkscontainer}>
            <NavLink to="/" className={style.navlink}>
              Home
            </NavLink>
            <NavLink to="/help" className={style.navlink}>
              Help
            </NavLink>
            <NavLink to="/login" className={style.navlink}>
              Login
            </NavLink>
            <NavLink to="/signup" className={style.navlink}>
              Sign up
            </NavLink>
           
            <NavLink to="/signup" className={style.createbutton}>
              Create Quiz
            </NavLink>
  
          </div>
        )}
          
      
          

       
      </div>


      <div className={style.logocontainer}>
        {/* <NavLink to="/"> */}
          <img src={syntax} alt="logo" className={style.logo}/>
        {/* </NavLink> */}
      </div>

    </nav>
  );
};

export default Navbar;

