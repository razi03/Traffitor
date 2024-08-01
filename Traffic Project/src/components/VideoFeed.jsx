import React from 'react';
import '../styles/VideoFeed.css';

const VideoFeed = ({ cameraNumber }) => {
  const videos = {
    1: 'https://www.youtube.com/embed/PiOqMMOFQNw?si=5KC6gNEi9D_33-py',
    2: 'https://www.youtube.com/embed/i0yqhHKWY0A?si=U8bWPRWiyObMYprm',
    3: 'https://www.youtube.com/embed/hafeal46exY?si=g4vl583O6T29XF8I',
    4: 'https://www.youtube.com/embed/aiBfJ02eeGE?si=9hB9wBUtkR4Ta6sL',
    5: 'https://www.youtube.com/embed/PVCGDoTZHaI?si=_pWlTQFMhqFyfkUb',
    6: 'https://www.youtube.com/embed/pttAEtguM6Q?si=G092UX4m3Kh7cVFo',
    7: 'https://www.youtube.com/embed/PVCGDoTZHaI?si=PP020yV4KVxDcz9u',
    8: 'https://www.youtube.com/embed/O2HsVybFP4I?si=Qa0ExUS-9ATYjAel',
    9: 'https://www.youtube.com/embed/dIz0aNRpfnY?si=n-qWJd4k2JMI5R5d',
    10: 'https://www.youtube.com/embed/hy1D3_bFs84?si=WE-TsZRZeRIwBKfW',
  };

  return (
    <div className="video-feed">
      <iframe
        src={videos[cameraNumber]}
        title={`Camera ${cameraNumber}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoFeed;
