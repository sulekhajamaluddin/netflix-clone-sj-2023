//Node modules
import React from "react";
import YouTube from "react-youtube";

export default function VideoPlayer() {
  const videoURL = "https://www.youtube.com/watch?v=sfftYjKbfm8";
  const videoID = videoURL.split("v=")[1];

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
