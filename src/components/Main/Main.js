import React, { useState, useEffect } from "react";
import "./Main.css";
import Imgg from "./image.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useLibrary } from "../../contexts/libraryContext";
import { data } from "../../data/videoLibrary";

function Main() {
  const { setLibrary } = useLibrary();
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    setLibrary(data);
  });

  return (
    <div className="main--body">
      <div className="main--nav">
        <div className="select--tag">
          <button onClick={() => setShowDropDown((prev) => !prev)}>
            <IoIosArrowDropdownCircle size={24} />{" "}
            <span className="show">Select a category</span>
          </button>
          <div className={showDropDown ? "option--tag" : " hide"}>
            <Link className="link" to="/:foundation/Home">
              <p>Foundation</p>
            </Link>
            <Link className="link" to={"/:es6/Home"}>
              <p>ES6</p>
            </Link>
            <Link className="link" to={"/:react/Home"}>
              <p>React</p>
            </Link>
            <Link className="link" to={"/:redux/Home"}>
              <p>Redux</p>
            </Link>
            <Link className="link" to={"/:typescript/Home"}>
              <p>TypeScript</p>
            </Link>
            <Link className="link" to={"/:nextjs/Home"}>
              <p>Next Js</p>
            </Link>
            <Link className="link" to={"/:reactnative/Home"}>
              <p>React Native</p>
            </Link>
          </div>
        </div>
        <input />
      </div>
      <div className="header--image">
        <img src={Imgg} alt="" />
        <h1>From No Stack to Full Stack</h1>
      </div>
    </div>
  );
}

export default Main;
