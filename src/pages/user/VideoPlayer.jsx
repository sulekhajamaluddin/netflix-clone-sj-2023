//Node modules
import React from "react";
import YouTube from "react-youtube";

export default function VideoPlayer() {
  function videoOnPause(event) {
    event.target.pauseVideo();
  }

  function videoOnPlay(event) {
    event.target.playVideo();
  }

  const videoURL = "https://www.youtube.com/watch?v=sfftYjKbfm8";
  const videoID = videoURL.split("v=")[1];

  const opts = {
    height: "500",
    width: "500",
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
      ;
    </div>
  );
}
