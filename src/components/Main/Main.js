import React, { useEffect } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import { useBookmark, useLibrary } from "../../contexts/bookmarkContext";

function MainHeader() {
  return (
    <div className="main--header">
      <h1>Welcome Back, Shivam</h1>
    </div>
  );
}

function BookMark() {
  const { bookmark } = useBookmark();
  return (
    <div className="tile--body">
      <div className="tile--header">
        <h1>Your Bookmarks</h1>
      </div>
      <div className="tile--content">
        {bookmark.map((item) => (
          <div className="content--list">
            <div className="list--image">
              <img src={item.back} alt="" />
            </div>
            <div className="list--details">
              <Link className="link" to={`/course/${item._id}`}>
                <h1 className="list--title">{item.name}</h1>
              </Link>
              <h1 className="list--author">{item.author}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Notes() {
  return <div className="div"></div>;
}

function Main({ setShowNavBottom }) {
  useEffect(() => {
    setShowNavBottom(true);
    return ()=>{
      setShowNavBottom(false);
    }
  }, []);
  return (
    <div className="main--body">
      <MainHeader />
      <div className="main--content">
        <BookMark />
        <BookMark />
        <Notes />
      </div>
    </div>
  );
}

export default Main;
