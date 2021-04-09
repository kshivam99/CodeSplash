import React, { useState } from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function MainHeader() {
  return(
    <div className="main--header">
      <h1>Welcome Back, Shivam</h1>
    </div>
  )
}

function MainTile() {
  return(
    <div className="tile--body">
      <div className="tile--header">
        <h1>Your Bookmarks</h1>
      </div>
      <div className="tile--content">
        <div className="content--list">
          <div className="list--image">
            <img src="https://static.frontendmasters.com/assets/courses/2021-02-09-functional-first-steps/thumb.jpg" alt=""/>
          </div>
          <div className="list--details">
            <h1 className="list--title">
                Functional programming
            </h1>
            <h1 className="list--author">
                Anjana Vakil
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

function Main() {

  return (
    <div className="main--body">
      <MainHeader />
      <div className="main--content">
          <MainTile />
          <MainTile />
      </div>
    </div>
  );
}

export default Main;
