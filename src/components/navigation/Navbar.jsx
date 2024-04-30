import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import { IoMdClose } from "react-icons/io";
import syntax from "../../../src/assets/logo2.png";
import NavLinks from "../navlinks/NavLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    const data = !isOpen;
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
  const navLinks = [
    {
      to: "/",
      children: "Home",
      className: style.navlink
    },
    {
      to: "/help",
      children: "Help",
      className: style.navlink
    },
    {
      to: "/login",
      children: "Login",
      className: style.navlink
    },
    {
      to: "/signup",
      children: "SignUp",
      className: style.navlink
    },
    {
      to: "/signup",
      children: "Create Quiz",
      className: style.createbutton
    }
  ]
  return (
    <nav className={style.navbarContainer}>
      <div className={style.text2}>
        <div onClick={toggleMenu}>
          {isOpen ? <IoMdClose className={ `${isOpen? style.hamburger: ""}`} /> : <span className={`${!isOpen ? style.hamburger:""}`}>≡</span>}
        </div>
        {isOpen && (
          <div className={style.linkscontainer}>
           {
            navLinks.map(({to,children,className})=>(
              <NavLinks key={to} to={to} children={children} className={className} />

            ))
           }
          </div>
        )}
      </div>

      <div className={style.logocontainer}>
        {/* <NavLink to="/"> */}
        <img src={syntax} alt="logo" className={style.logo} />
        {/* </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;
