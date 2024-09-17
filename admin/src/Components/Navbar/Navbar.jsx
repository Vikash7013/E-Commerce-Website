/* eslint-disable no-unused-vars */
import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" alt="navbarlogo" />
      <img src={navProfile} className="nav-profile" alt="navbarprofile" />
    </div>
  );
};

export default Navbar;
