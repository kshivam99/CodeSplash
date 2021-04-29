import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [showDropDownNav, setShowDropDownNav] = useState(false);

  function handleMenuIconClick() {
    setShowDropDownNav((prev) => !prev);
  }
  return (
    <>
      <div className="nav">
        <Link className="link" to="/">
          <h1 onClick={() => setShowDropDownNav(false)}>
            Code<span>Splash</span>
          </h1>
        </Link>
        <ul className={!showDropDownNav ? "menu" : "menu active"}>
          <Link className="link" to="/courses">
            <li onClick={handleMenuIconClick}>Courses</li>
          </Link>
          <Link className="link" to="/playlist">
            <li onClick={handleMenuIconClick}>My Playlist</li>
          </Link>
          <Link className="link" to="/login">
            <li>Login</li>
          </Link>
          <Link className="link" to="/join">
            <button>Join Now</button>
          </Link>
        </ul>
        <div className="menu-icon" onClick={handleMenuIconClick}>
          {!showDropDownNav ? <FaBars /> : <FaTimes />}
        </div>
      </div>
      <div className="bottom--bar"></div>
    </>
  );
}

export default Navbar;
