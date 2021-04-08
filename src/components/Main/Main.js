import React, { useState, useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useLibrary } from "../../contexts/libraryContext";
import code1 from "../../assests/code1.svg" 

function Main() {
  const { library, setLibrary } = useLibrary();
  const [showDropDown, setShowDropDown] = useState(false);


  return (
    <div className="main--body">
      <div className="main--nav">
        <div className="select--tag">
          <button onClick={() => setShowDropDown((prev) => !prev)}>
            <IoIosArrowDropdownCircle size={24} />{" "}
            <span className="show">Select a category</span>
          </button>
          <div className={showDropDown ? "option--tag" : " hide"}>
            <Link className="link" to="/foundation/Home">
              <p>Foundation</p>
            </Link>
            <Link className="link" to={"/js/Home"}>
              <p>JavaScript</p>
            </Link>
            <Link className="link" to={"/react/Home"}>
              <p>React</p>
            </Link>
            <Link className="link" to={"/redux/Home"}>
              <p>Redux</p>
            </Link>
            <Link className="link" to={"/typescript/Home"}>
              <p>TypeScript</p>
            </Link>
            <Link className="link" to={"/nextjs/Home"}>
              <p>Next Js</p>
            </Link>
            <Link className="link" to={"/reactnative/Home"}>
              <p>React Native</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
