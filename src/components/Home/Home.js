import React from "react";
import "./Home.css";
import { useLibrary } from "../../contexts/libraryContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { data } from "../../data/videoLibrary";
import { useState } from "react";
import uuid from "react-uuid";
import SideList from "./SideList";
import VideoPlay from "./VideoPlay";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useParams } from "react-router-dom"

function Home() {

  let { type,id } = useParams();
  console.log(id)
  let name;
  type=JSON.stringify(type.slice(1)).toLowerCase();
  const { library, setLibrary } = useLibrary();
  const { playlist, setPlaylist } = usePlaylist();
  const [pname, setPname] = useState();
  const [showList, setShowList] = useState(false);
  const [currVideo, setCurrVideo] = useState("");

  console.log("playlist", playlist);
  function addPlaylist(e) {
    console.log("checks");
    if (e.key === "Enter") {
      console.log("hello");
      setPlaylist((prev) =>
        prev.concat({ id: uuid(), name: pname, videos: [] })
      );
      setPname("");
    }
  }

  function checkAlreadyPresent(videos, vid) {
    return !videos.filter((item) => item === vid).length > 0;
  }

  function addToPlaylist(e, vid) {
    setPlaylist((prev) =>
      prev.map((curr) =>
        curr.id === e.target.value
          ? {
              ...curr,
              videos: checkAlreadyPresent(curr.videos, vid)
                ? [...curr.videos, vid]
                : [...curr.videos],
            }
          : curr
      )
    );
  }

  function getFilteredData(data, type
  ) {
    const res = (id?playlist:data)
      .filter((curr) =>{
        if(curr.type===JSON.parse(type))
        {
          name=curr.name;
        }
        return curr.type===JSON.parse(type)
      }
      )[0].videos
    return res;
  }

  const filteredData = getFilteredData(data, type);
  console.log("playlist dta",filteredData);

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
      <VideoPlay currVideo={currVideo} />

      {/* {library.map((vid) => (
        <div>
          <h1 style={{ width: "20rem" }}>{vid.heading}</h1>
          <select onChange={(e) => addToPlaylist(e, vid)}>
            {playlist.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>
      ))} */}


      {/* {playlist.map((item) => {
        return (
          <>
            <h1>{item.name}</h1>
            {item.videos.map((vid) => (
              <p>{vid.heading}</p>
            ))}
          </>
        );
      })} */}
    </div>
  );
}

export default Home;
