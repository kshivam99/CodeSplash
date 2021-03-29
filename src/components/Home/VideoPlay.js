import React from "react";
import { YoutubePlayer } from "reactjs-media";

function VideoPlay({currVideo}) {
  return (
    <div className="videoPlayer">
      {/* <YoutubePlayer
        className="video"
        src={currVideo}
        allowFullScreen={true}
        width={900}
        height={500}
      /> */}
      <iframe style={{borderRadius:"2rem"}} width="80%" height="80%" src={currVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
    </div>
  );
}

export default VideoPlay;
