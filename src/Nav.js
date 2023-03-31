import React, { useEffect, useState } from 'react'
import "./Nav.css"
import netflixLogo from './static/netflix-logo.png';
import netflixAvatar from './static/netflix-avatar.png';
import { useNavigate } from "react-router-dom";
import NavbarItem from './NavbarItem';
import { BsChevronDown } from 'react-icons/bs';

function Nav({ hideNavbarItems = false }) {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const navbarItemStyle = hideNavbarItems ? { display: 'none' } : {};

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_contents'>
        <img className='nav_logo'
          src={netflixLogo}
          alt=""
          onClick={() => navigate("/")} />
        <div className='navbarItem_contents' style={navbarItemStyle}>
          <NavbarItem title="Home" />
          <NavbarItem title="TV Shows" />
          <NavbarItem title="Movies" />
          <NavbarItem title="New & Popular" />
          <NavbarItem title="My List" />
          <NavbarItem title="Browse by Languages" />
        </div>
        <div className="navbar_browse" style={navbarItemStyle}>
          <p className="browse">
            Browse
            <BsChevronDown className="chevron" />
          </p>
        </div>
        <img className='nav_avatar'
          src={netflixAvatar}
          alt=""
          onClick={() => navigate("/profile")} />
      </div>
    </div>
  )
}

export default Nav