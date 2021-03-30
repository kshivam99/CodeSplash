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
    <div className="nav">
      <Link className="link" to="/">
        <h2 onClick={handleMenuIconClick}>CodeSplash</h2>
      </Link>
      <ul className={!showDropDownNav ? "menu" : "menu active"}>
        <Link className="link" to="/">
          <li onClick={handleMenuIconClick}>Home</li>
        </Link>
        <Link className="link" to="/playlist">
          <li onClick={handleMenuIconClick}>My Playlist</li>
        </Link>
        <li>
          <button>Dark</button>
        </li>
      </ul>
      <div className="menu-icon" onClick={handleMenuIconClick}>
        {!showDropDownNav ? <FaBars /> : <FaTimes />}
      </div>
    </div>
  );
}

export default Navbar;
