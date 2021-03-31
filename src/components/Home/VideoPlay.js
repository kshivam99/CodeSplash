import React, { useState, useEffect } from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import { useLibrary } from "../../contexts/libraryContext";
import uuid from "react-uuid";

function VideoPlay({ currVideo, id, type }) {
  const { library, setLibrary } = useLibrary();
  const { playlist, setPlaylist } = usePlaylist();
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    localStorage.setItem("library", JSON.stringify(library));
  }, [library]);

  function handleSubmit(e) {
    if (e.key === "Enter") {
      id?setPlaylist((prev) =>
      prev.map((curr) =>
        curr.type === type
          ? {
              ...curr,
              videos: curr.videos.map((vid) =>
                vid.id === currVideo.id
                  ? {
                      ...vid,
                      notes: [
                        ...vid.notes,
                        { id: uuid(), time: time, note: note },
                      ],
                    }
                  : vid
              ),
            }
          : curr
      )):
      setLibrary((prev) =>
        prev.map((curr) =>
          curr.type === type
            ? {
                ...curr,
                videos: curr.videos.map((vid) =>
                  vid.id === currVideo.id
                    ? {
                        ...vid,
                        notes: [
                          ...vid.notes,
                          { id: uuid(), time: time, note: note },
                        ],
                      }
                    : vid
                ),
              }
            : curr
        )
      );
      setTime("");
      setNote("");
    }
  }

  console.log(library);
  return (
    <div className="videoPlayer--body">
      <div className="videoPlayer">
        <iframe
          style={{ borderRadius: "2rem"}}
          width="100%"
          height="100%"
          src={currVideo.video}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
        />
      </div>
      <h1>Add Notes Below</h1>

      <div className="videoPlayer--notes">
        <input
          value={time}
          placeholder="add time"
          onChange={(e) => setTime(e.target.value)}
        />
        <input
          value={note}
          placeholder="add notes"
          onChange={(e) => setNote(e.target.value)}
          onKeyDown={handleSubmit}
        />

        <div className="notes-list">
          {(id?playlist:library).map((curr) =>
            curr.type === type
              ? curr.videos.map((vid) =>
                  vid.id === currVideo.id
                    ? vid.notes.map((item) => <h1>{item.note}</h1>)
                    : null
                )
              : null
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoPlay;
