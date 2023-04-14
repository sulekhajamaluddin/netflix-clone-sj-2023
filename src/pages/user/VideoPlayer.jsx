//Node modules
import React from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";

export default function VideoPlayer() {
  const { state } = useLocation();
  const videoURL = state?.url;
  const videoID = videoURL?.split("v=")[1];

  function videoOnPause(event) {
    event.target.pauseVideo();
  }

  function videoOnPlay(event) {
    event.target.playVideo();
  }

  const opts = {
    width: "375",
    height: "500",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="video-player">
      <YouTube
        videoId={videoID}
        opts={opts}
        onPause={videoOnPause}
        onPlay={videoOnPlay}
      />
    </div>
  );
}
