import { useEffect, useRef } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
      >
        <source
          src="hey.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-overlay"></div>
    </div>
  );
};

export default VideoBackground;