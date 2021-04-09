import React, { useEffect, useState } from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import uuid from "react-uuid";
import { HiOutlineViewGridAdd } from "react-icons/hi"

function AddToPlaylist({ showPlaylistMenu, setShowPlaylistMenu, vid }) {
  const { playlist, setPlaylist } = usePlaylist();
  const [pname, setPname] = useState();

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

  function addPlaylist(e) {
    if ((e.key === "Enter" || e.type==='click') && pname && pname.trim()!=="") {
      setPlaylist((prev) =>
        prev.concat({
          id: uuid(),
          name: pname.trim(),
          type: pname.trim(),
          videos: []
        })
      );
      setPname("");
    }
  }

  return (
    <div className="modal-container" style={{display:showPlaylistMenu?"":"none"}}>
      <div
        className="addToPlaylist"
        style={{ display: showPlaylistMenu ? "" : "none" }}
      >
        <AiFillCloseCircle
          onClick={() => setShowPlaylistMenu((prev) => !prev)}
          style={{ marginLeft: "auto" }}
          size={24}
        />
        <div className="input--flex">
        <input
          value={pname}
          onChange={(e) => setPname(e.target.value)}
          onKeyDown={addPlaylist}
          placeholder="Add New Playlist"
          style={{
            backgroundColor: "#fff",
            padding: "0.2rem",
            width: "80%",
          }}
        />
        <span><HiOutlineViewGridAdd size={24} onClick={addPlaylist}/></span>
        </div>
        <select
          style={{ width: "100%", marginTop: "1rem" }}
          onChange={(e) => addToPlaylist(e, vid)}
        >
          <option>Add to playlist</option>
          {playlist.map((item) => (
            <option value={item.id}>{item.type}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
function StackList({ vid, setCurrVideo, setShowList }) {
  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);

  return (
    <div className="stacklist--container">
      <div
        className="stacklist"
        onClick={() => {
          setCurrVideo(vid);
        }}
      >
        <h1>{vid.heading}</h1>
      </div>
      <RiPlayListAddLine
        onClick={() => setShowPlaylistMenu((prev) => !prev)}
        size={32}
      />
      <AddToPlaylist showPlaylistMenu={showPlaylistMenu} setShowPlaylistMenu={setShowPlaylistMenu} vid={vid}/>
    </div>
  );
}

function SideList({ name, videos, showList, setShowList, setCurrVideo }) {
  useEffect(() => {
    setCurrVideo(videos[0]);
  }, []);

  return (
    <div className={!showList ? "sidelist" : "sidelist--show"}>
      <div className="sidelist--header">
        <h1>{name}</h1>
        <AiFillCloseCircle
          className="sidelist--close"
          onClick={() => setShowList((prev) => !prev)}
          size={24}
        />
      </div>
      {videos.map((vid) => (
        <StackList
          vid={vid}
          setCurrVideo={setCurrVideo}
          setShowList={setShowList}
        />
      ))}
    </div>
  );
}

export default SideList;
