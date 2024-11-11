import React from "react";

export default function Video({ play, handlePlay }) {
  return (
    <div className="welcome">
      <div className="welcome-header-row">
        <h1 className="welcome-header">Mac</h1>
        <div className="welcome-header-description">
          <p>
            꿈꾸던 그 모든 것,
            <br />
            Mac과 함께 현실로.
          </p>
        </div>
      </div>
      <div className="welcome-video-content">
        <video>
          <source src="https://www.apple.com/105/media/us/mac/family/2024/b0f6d595-f4dd-4393-8316-102be97a5d1b/anim/welcome/xlarge.mp4#t=3.83624" />
        </video>
        <div className="video-control">
          <button onClick={handlePlay}>{play ? <p>II</p> : <p>▶️</p>}</button>
        </div>
      </div>
    </div>
  );
}
