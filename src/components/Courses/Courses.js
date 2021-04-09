import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import { useLibrary } from "../../contexts/libraryContext";
import { BsBookmark } from "react-icons/bs";

function Course({
  item: { author, profile, image, desc, duration, name, type, back },
}) {
  return (
    <div className="course--div">
      <div className="course--img">
        <img src={back} alt="" />
      </div>
      <div className="course--details">
        <div className="course--title">
          <h1>{name}</h1>
          <BsBookmark size={24} style={{ marginLeft: "auto" }} />
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
  return (
    <div className="courses--main">
      <div className="courses--header">
        <h1>Full Stack Development Courses</h1>
        <input type="text" placeholder="Type to Search" />
      </div>
      <div className="courses--list">
        {library.map((item) => (
          <Course item={item} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
