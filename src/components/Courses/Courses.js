import React, { useEffect, useState } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { useLibrary } from "../../contexts/libraryContext";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";
import { useBookmark } from "../../contexts/bookmarkContext";

function Course({
  item: {
    id,
    author,
    profile,
    image,
    desc,
    duration,
    name,
    type,
    back,
    isSaved,
  },
}) {
  const { setBookmark } = useBookmark();
  const { setLibrary } = useLibrary();

  function handleBookmark() {
    if (isSaved) {
      setBookmark((prev) => prev.filter((item) => item.id !== id));
      setLibrary((prev) =>
        prev.map((curr) =>
          curr.id === id ? { ...curr, isSaved: false } : curr
        )
      );
    } else {
      setBookmark((prev) =>
        prev.concat({ id, author, profile, name, back, type })
      );
      setLibrary((prev) =>
        prev.map((curr) => (curr.id === id ? { ...curr, isSaved: true } : curr))
      );
    }
  }
  return (
    <div className="course--div">
      <div className="course--img">
        <img src={back} alt="" />
      </div>
      <div className="course--details">
        <div className="course--title">
          <h1>{name}</h1>
          {!isSaved ? (
            <BsBookmark
              onClick={handleBookmark}
              size={24}
              style={{ marginLeft: "auto" }}
            />
          ) : (
            <BsFillBookmarkFill
              onClick={handleBookmark}
              color={"#E56026"}
              size={24}
              style={{ marginLeft: "auto" }}
            />
          )}
        </div>
        <div className="course--author">
          <img src={image} alt="" />
          <div className="author--details">
            <h1>{author}</h1>
            <h2>{profile}</h2>
          </div>
        </div>
        <p>{desc}</p>
        <h1 className="course--duration">{duration}</h1>
        <Link className="link" to={`/${type}/Home`}>
          <button>View Playlist</button>
        </Link>
      </div>
    </div>
  );
}

function Courses() {
  const { library } = useLibrary();
  const [inputText, setInputText] = useState("");
  const [output, setOutput] = useState([]);

  function checkAvailable(db, item) {
    let pat = item.trim();
    return db.toUpperCase().includes(pat.toUpperCase());
  }

  useEffect(() => {
    setOutput(library.filter((curr) => checkAvailable(curr.name, inputText)));
  }, [inputText]);

  return (
    <div className="courses--main">
      <div className="courses--header">
        <h1>Full Stack Development Courses</h1>
        <input
          type="text"
          placeholder="Type to Search"
          onChange={(e) => setInputText(e.target.value)}
        />
      </div>
      <div className="courses--list">
        {inputText.length
          ? output.map((item) => <Course item={item} />)
          : library.map((item) => <Course item={item} />)}
      </div>
    </div>
  );
}

export default Courses;
