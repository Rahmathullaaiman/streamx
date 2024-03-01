import React from 'react';
import './video.css'; 

function Video() {
  return (
    <div className="video-container">
      <div className="video-player">
       
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Tm3bfwRskbA"
          title="Video Player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="video-frame"
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
