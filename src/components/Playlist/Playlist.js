import React, { useState, useEffect } from "react";
import "./Playlist.css";
import { usePlaylist } from "../../contexts/playlistContext";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

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
              {length < 2 ? `${length} video` : `${length} videos`} will be
              deleted.
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
    setPlaylist((prev) => prev.filter((curr) => curr._id !== item._id));
    setViewDeleteModal(false);
  }

  return (
    <div className="playlist--card">
      <div className="course--img"></div>
      <div className="course--details">
        <div className="course--title">
          <h1>{item.name}</h1>
          <AiTwotoneDelete
            size={24}
            style={{ marginLeft: "auto" }}
            onClick={() => setViewDeleteModal(true)}
          />
        </div>
        
        <p>{item.desc}</p>
        <h1 className="course--duration">
          {" "}
          {item.videos.length < 2
            ? `${item.videos.length} video`
            : `${item.videos.length} videos`}
        </h1>
        <Link to={`/playlist/${item._id}`}>
          {item.videos.length ? <button>View Playlist</button> : null}
        </Link>
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

function Playlist() {
  const { playlist } = usePlaylist();

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
