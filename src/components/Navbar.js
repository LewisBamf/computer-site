import React from "react";
import logo from './logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <svg viewBox="50px 50px">
          <image href={logo} alt="logo" className="logo" />
        </svg>

        <div className="nav-links">
          <h2 className="link">home</h2>
          <h2 className="link">prices</h2>
          <h2 className="link">contact</h2>
          <h2 className="link">About us</h2>
        </div>
        <div className="login">
          <h3>Log in</h3>
        </div>
      </div>
    </>
  )
}

export default Navbar;
