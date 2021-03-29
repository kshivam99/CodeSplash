import React from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import "./Home.css";
import { useLibrary } from "../../contexts/libraryContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { data } from "../../data/videoLibrary";
import { useEffect, useState } from "react";
import { YoutubePlayer } from "reactjs-media";
import uuid from "react-uuid";
import SideList from "./SideList";
import VideoPlay from "./VideoPlay";
import { AiOutlineMenuUnfold } from "react-icons/ai"

function Home() {
  const { library, setLibrary } = useLibrary();
  const { playlist, setPlaylist } = usePlaylist();
  const [pname, setPname] = useState();
  const [showList, setShowList] = useState(false)
  const [ currVideo, setCurrVideo ] = useState(data[0].video);


  useEffect(() => setLibrary(data), []);

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
    return !videos.filter(item=>item===vid).length>0;
  }

  function addToPlaylist(e, vid) {
    setPlaylist((prev) =>
      prev.map((curr) =>
        curr.id === e.target.value
          ? {
              ...curr,
              videos: checkAlreadyPresent(curr.videos, vid)
                ? [...curr.videos, vid]
                : [...curr.videos]
            }
          : curr
      )
    );
  }

  console.log(data[0].video)
  return (
    <div className="home--body">
      <SideList showList={showList} setShowList={setShowList} setCurrVideo={setCurrVideo} />
      <AiOutlineMenuUnfold className="sidebar--icon" size={32} onClick={()=>setShowList(prev=>!prev)}/>
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

      {/* <input
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        onKeyDown={addPlaylist}
        placeholder="create custom playlist"
      /> */}
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
