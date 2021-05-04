import React, { useState, useRef } from "react";
import { usePlaylist } from "../../contexts/playlistContext";
import { useLibrary } from "../../contexts/libraryContext";
import uuid from "react-uuid";
import ReactPlayer from "react-player";
import { AiFillDelete, AiFillFileAdd } from "react-icons/ai";
import { useNote } from "../../contexts/notesContext";

function VideoPlay({ currVideo }) {
  const { notes, setNotes } = useNote();
  const [note, setNote] = useState("");
  const ref = useRef();

  console.log("notes",notes);
  console.log(currVideo);

  function handleSubmit(e) {
    if ((e.key === "Enter" || e.type === "click") && note) {
      setNotes((prev) =>
        prev.concat({
          id: uuid(),
          videoId: currVideo.id,
          timeStamp: ref.current.getCurrentTime(),
          note: note,
          date: Date(),
        })
      );
      setNote("");
    }
  }

  function seekTo(time) {
    ref.current.seekTo(time);
  }

  function handleNoteDelete(noteId) {
    setNotes(prev=>prev.filter(note=>note.id!==noteId));
  }

  function getTime(time) {
    let hour, min, sec;
    time = parseInt(time);
    hour = time / 3600;
    time = time % 3600;
    min = time / 60;
    time = time % 60;
    sec = time;
    return `${parseInt(hour)}:${parseInt(min)}:${parseInt(sec)}`;
  }

  return (
    <div className="videoPlayer--body">
      <div className="videoPlayer">
        <ReactPlayer
          ref={ref}
          controls="true"
          width="100%"
          height="80%"
          className="iframe"
          url={currVideo && currVideo.video}
          playing="true"
          light=""
        />
      </div>

      <div className="videoPlayer--notes">
        <div className="notes--header">
          <h1>Notes</h1>
        </div>
        <div className="notes-list">
          {notes
            .filter((item) => item.videoId === currVideo.id)
            .map((item) => (
              <div className="note">
                <div className="note--detail">
                  <p className="note--info">{item.note}</p>
                  <p className="note--date">{item.date.slice(0, 25)}</p>
                </div>
                <div className="note--util">
                  <h1 onClick={() => seekTo(item.timeStamp)}>
                    {getTime(item.timeStamp)}
                  </h1>
                  <AiFillDelete onClick={() => handleNoteDelete(item.id)} />
                </div>
              </div>
            ))}
        </div>
        <div className="notes--input">
          <input
            maxLength="65"
            value={note}
            placeholder="add notes"
            onChange={(e) => setNote(e.target.value)}
            onKeyDown={handleSubmit}
          />
          <AiFillFileAdd size={24} onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default VideoPlay;
