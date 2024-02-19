import React from 'react';
import './video.css'; // Import your CSS file for styling

function Video() {
  return (
    <div className="video-container">
     
      <div className="video-player">
        {/* Add your video player component here */}
        {/* For example, if you're using a third-party video player library */}
        {/* <YourVideoPlayerComponent /> */}
        {/* Or if you're embedding a video directly */}
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VIDEO_ID"
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
