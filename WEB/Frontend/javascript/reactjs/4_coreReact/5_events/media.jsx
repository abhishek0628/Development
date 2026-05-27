import React from "react";

function MediaEventsDemo() {
  const handleEvent = (eventName) => {
    console.log(`Event triggered: ${eventName}`);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>React Media Events Demo</h2>

      <video
        width="500"
        controls

        onPlay={() => handleEvent("onPlay")}
        onPause={() => handleEvent("onPause")}
        onEnded={() => handleEvent("onEnded")}
        onTimeUpdate={() => handleEvent("onTimeUpdate")}
        onVolumeChange={() => handleEvent("onVolumeChange")}
        onSeeking={() => handleEvent("onSeeking")}
        onSeeked={() => handleEvent("onSeeked")}
        onWaiting={() => handleEvent("onWaiting")}
        onLoadedData={() => handleEvent("onLoadedData")}
        onLoadedMetadata={() => handleEvent("onLoadedMetadata")}
        onLoadStart={() => handleEvent("onLoadStart")}
        onCanPlay={() => handleEvent("onCanPlay")}
        onCanPlayThrough={() => handleEvent("onCanPlayThrough")}
        onStalled={() => handleEvent("onStalled")}
        onSuspend={() => handleEvent("onSuspend")}
        onError={() => handleEvent("onError")}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default MediaEventsDemo;