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
    // <div className="nav--body">
    //   <div className="nav">
    //     <Link className="link" to="/">
    //       <h2 onClick={() => setShowDropDownNav(false)}>{`<CodeSplash />`}</h2>
    //     </Link>
    //     <ul className={!showDropDownNav ? "menu" : "menu active"}>
    //       <Link className="link" to="/">
    //         <li onClick={handleMenuIconClick}>Home</li>
    //       </Link>
    //       <Link className="link" to="/playlist">
    //         <li onClick={handleMenuIconClick}>My Playlist</li>
    //       </Link>
    //       <Link className="link" to="/history">
    //         <li onClick={handleMenuIconClick}>Watch History</li>
    //       </Link>
    //     </ul>
    //     <div className="menu-icon" onClick={handleMenuIconClick}>
    //       {!showDropDownNav ? <FaBars /> : <FaTimes />}
    //     </div>
    //   </div>
    //   <div className="bottom--bar">

    //   </div>
    // </div>
    <div className="nav--body">
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
            <li>Learn</li>
            <Link className="link" to="/playlist">
             <li onClick={handleMenuIconClick}>My Playlist</li>
           </Link>
            <li>Login</li>
            <li>
              <button>Join Now</button>
            </li>
          </ul>
          <div className="menu-icon" onClick={handleMenuIconClick}>
         {!showDropDownNav ? <FaBars /> : <FaTimes />}
       </div>
      </div>
      <div className="bottom--bar"></div>
    </div>
  );
}

export default Navbar;
