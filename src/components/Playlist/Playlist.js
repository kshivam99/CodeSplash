import React, { useState } from "react";
import uuid from "react-uuid";
import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import PlayIcon from "../../assests/play-icon.png";
import { HiOutlineViewGridAdd } from "react-icons/hi";

function Alert({ view, setView, handleDelete, name, length }) {
  return (
    <>
      <div
        class="modal-container"
        id="alert-modal-container"
        style={{ display: view ? "" : "none" }}
      >
        <div class="modal-card margin-bottom">
          <div class="modal-header">
            <h4 class="modal-title">Delete Playlist</h4>
          </div>
          <div class="modal-card-body">
            <p class="modal-description">
              Are you sure you want to discard <strong>{name}</strong> playlist?{" "}
              {length<2?`${length} video`:`${length} videos`} will be deleted.
            </p>
          </div>
          <div class="modal-footer">
            <button
              class="light-button button-small margin-right"
              id="unactive-alert-modal"
              onClick={() => setView(false)}
            >
              NO
            </button>
            <button
              onClick={handleDelete}
              class="secondary-button button-small"
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function PlaylistCard({ item }) {
  const { setPlaylist } = usePlaylist();
  const [viewDeleteModal, setViewDeleteModal] = useState(false);

  function handleDelete() {
    setPlaylist((prev) => prev.filter((curr) => curr.id !== item.id));
    setViewDeleteModal(false);
  }

  return (
    <div className="playlist--card">
      <img src={PlayIcon} alt="" />
      <h3>{item.name}</h3>
      <h4>{item.videos.length<2?`${item.videos.length} video`:`${item.videos.length} videos`}</h4>
      <div className="playlist--btn">
        <Link to={`/${item.type.toLowerCase()}/:1`}>
          {item.videos.length ? <button>View Playlist</button> : null}
        </Link>
        <AiTwotoneDelete onClick={() => setViewDeleteModal(true)} />
      </div>
      <Alert
        view={viewDeleteModal}
        setView={setViewDeleteModal}
        handleDelete={handleDelete}
        name={item.name}
        length={item.videos.length}
      />
    </div>
  );
}

function CreateNewPlaylist({ setPlaylist }) {
  const [pname, setPname] = useState();

  function addPlaylist(e) {
    if (
      (e.key === "Enter" || e.type === "click") &&
      pname &&
      pname.trim() !== ""
    ) {
      setPlaylist((prev) =>
        prev.concat({
          id: uuid(),
          type: pname.trim(),
          videos: []
        })
      );
      setPname("");
    }
  }

  return (
    <div className="createplaylist--container">
      <input
        value={pname}
        maxLength="15"
        onChange={(e) => setPname(e.target.value)}
        onKeyDown={addPlaylist}
        placeholder="create custom playlist"
        style={{
          backgroundColor: "#fff",
          marginRight: "1rem",
        }}
      />
      <HiOutlineViewGridAdd size={24} onClick={addPlaylist} />
    </div>
  );
}

function Playlist() {
  const { playlist, setPlaylist } = usePlaylist();

  return (
    <div className="playlist--body">
      <div className="playlists">
        {playlist.map((item) => (
          <PlaylistCard item={item} />
        ))}
        {!playlist.length ? (
          <h1
            style={{
              color: "#fff",
            }}
          >
            Add playlist to view here
          </h1>
        ) : null}
      </div>
    </div>
  );
}

export default Playlist;
