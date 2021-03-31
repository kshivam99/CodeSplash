import React from "react";
import "./Home.css";
import { useLibrary } from "../../contexts/libraryContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { useState } from "react";
import SideList from "./SideList";
import VideoPlay from "./VideoPlay";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useParams } from "react-router-dom";

function Home() {
  let { type, id } = useParams();
  let name;
  type = JSON.stringify(type.slice(1)).toLowerCase();
  const { library, setLibrary } = useLibrary();
  const { playlist, setPlaylist } = usePlaylist();
  const [showList, setShowList] = useState(false);
  const [currVideo, setCurrVideo] = useState("");

  function getFilteredData(library, type) {
    const res = (id ? playlist : library).filter((curr) => {
      if (curr.type.toLowerCase() === JSON.parse(type)) {
        name = curr.name;
      }
      return curr.type.toLowerCase() === JSON.parse(type);
    })[0].videos;
    return res;
  }

  const filteredData = getFilteredData(library, type);

  return (
    <div className="home--body">
      <SideList
        name={name}
        videos={filteredData}
        showList={showList}
        setShowList={setShowList}
        setCurrVideo={setCurrVideo}
      />
      <AiOutlineMenuUnfold
        className="sidebar--icon"
        size={32}
        onClick={() => setShowList((prev) => !prev)}
      />
      <VideoPlay currVideo={currVideo} id={id} type={JSON.parse(type)} />
    </div>
  );
}

export default Home;
