import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import VideoFeed from '../../components/VideoFeed';
import DataPanel from '../../components/DataPanel';
import '../../styles/Dashboard.css';

const Dashboard = () => {
  const [selectedCamera, setSelectedCamera] = useState(1);
  const [cameras, setCameras] = useState(Array.from({ length: 10 }, (_, i) => i + 1));

  const handleCameraSwitch = (event) => {
    setSelectedCamera(Number(event.target.value));
  };

  return (
    <div>
      <Navbar />
      <div className="dashboard">
        <div className="sidebar">
          <div className="selections">
            <h3>Selections</h3>
            <div>
              <label>Area:</label>
              <select>
                <option>Area 1</option>
                <option>Area 2</option>
              </select>
            </div>
            <div>
              <label>Camera:</label>
              <select onChange={handleCameraSwitch} value={selectedCamera}>
                {cameras.map(camera => (
                  <option key={camera} value={camera}>
                    Camera-{camera}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="live-stats">
            <DataPanel cameraNumber={selectedCamera} />
          </div>
        </div>
        <div className="content">
          <VideoFeed cameraNumber={selectedCamera} />
          <div className="camera-number">Camera {selectedCamera}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
