import React, { useState } from "react";
import uuid from "react-uuid";
import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";



function PlaylistCard({item}) {
    const { setPlaylist } = usePlaylist();

    function handleDelete(){
        setPlaylist(prev=>prev.filter(curr=>curr.id!==item.id))
    }

    return(
        <div className="playlist--card">
            <AiTwotoneDelete onClick={handleDelete}/>
                 {item.type}
            <Link to={`/:${item.type.toLowerCase()}/:1/playlist`}>
            {item.videos.length?<button>View Playlist</button>:null}
            </Link>
            <h4>{item.videos.length} Videos</h4>
        </div>
    )
}

function Playlist() {
  const { playlist, setPlaylist } = usePlaylist();
  const [pname, setPname] = useState();

  function addPlaylist(e) {
    if (e.key === "Enter") {
      setPlaylist((prev) =>
        prev.concat({ id: uuid(), name:pname, type: pname, videos: [], notes:[] })
      );
      setPname("");
    }
  }

  return (
    <div className="playlist--body">
      <input
        value={pname}
        onChange={(e) => setPname(e.target.value)}
        onKeyDown={addPlaylist}
        placeholder="create custom playlist"
        style={{
            backgroundColor:"#fff",
            marginTop:"5rem"
        }}
      />

      <div className="playlists">
        {playlist.map(item=>
            <PlaylistCard item={item} />)}
        {!playlist.length?<h1 style={{
          color:"#2563EB"
        }}>Add playlist to view here</h1>:null}
      </div>
    </div>
  );
}

export default Playlist;
