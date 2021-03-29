import React from "react";
import { useLibrary } from "../../contexts/libraryContext";
import { usePlaylist } from "../../contexts/playlistContext";
import { RiPlayListAddLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai"

function StackList({ vid, setCurrVideo }) {
  const { playlist, setPlaylist } = usePlaylist();

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

  return (
    <div className="stacklist--container">
      <div className="stacklist" onClick={() => setCurrVideo(vid.video)}>
        <h1>{vid.heading}</h1>
      </div>
      <RiPlayListAddLine size={32} />
      {/* <select onChange={(e) => addToPlaylist(e, vid)}>
        {playlist.map((item) => (
          <option value={item.id}>{item.name}</option>
        ))}
      </select> */}
    </div>
  );
}

function SideList({ showList, setShowList, setCurrVideo }) {
  const { library, setLibrary } = useLibrary();
  return (
    <div className={!showList?"sidelist":"sidelist--show"}>
      <div className="sidelist--header">
        <h1>This will have heading</h1>
        <AiFillCloseCircle  onClick={()=>setShowList(prev=>!prev)} size={24}/>
      </div>
      {library.map((vid) => (
        <StackList vid={vid} setCurrVideo={setCurrVideo} />
      ))}
    </div>
  );
}

export default SideList;
