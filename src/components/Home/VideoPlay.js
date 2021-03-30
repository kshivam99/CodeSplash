import React from "react";

function VideoPlay({currVideo}) {
  return (
    <div className="videoPlayer">
      <iframe style={{borderRadius:"2rem"}} width="80%" height="80%" src={currVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true" />
    </div>
  );
}

export default VideoPlay;
