import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';

const LiveVIDEOBOX = () => {
  const rtmpURL = "http://localhost:8080/live/livestream.flv"
  
  return (
    <div>
      <ReactPlayer
      
        url={rtmpURL}
        controls={true}
        playing={true}
        width="980px"
        height="470px"
        style={{
          border:'none',
          margin:'10px 0px 0px -70px'
        }}
      />
    </div>
  );
};

export default LiveVIDEOBOX;
