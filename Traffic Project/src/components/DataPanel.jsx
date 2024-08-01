import React, { useState } from 'react';
import '../styles/DataPanel.css';
import violationImage from '../assets/voilation-image.jpeg';
import licensePlateImage from '../assets/license-plate.png';

const DataPanel = ({ cameraNumber }) => {
  const initialVehicleCount = {
    total: 150,
    cars: 120,
    motorbikes: 20,
    bicycles: 5,
    trucks: 5,
  };

  const [vehicleCount, setVehicleCount] = useState(initialVehicleCount);

  const handleReset = () => {
    setVehicleCount({
      total: 0,
      cars: 0,
      motorbikes: 0,
      bicycles: 0,
      trucks: 0,
    });
  };

  const data = {
    violationImage: violationImage,
    violationType: `Wrong lane`,
    licensePlateNumber: 'AB - 123',
    licensePlateImage: licensePlateImage,
    vehicleType: 'Car',
    vehicleCount,
    congestion: 'Moderate',
    blockage: 'None',
    laneSeparationMarking: 'Visible',
    wrongLaneDetection: 'None',
    colorSegregation: 'Red',
    laneViolationDetection: 'None',
    trafficCongestionDetection: 'Moderate',
    trafficBlockageDetection: 'None',
    multiplePenalties: ['Helmet', 'Seat belt'],
  };

  return (
    <div className="data-panel">
      <div className="section">
        <h2>Violation</h2>
        <div>
          <label><strong>Violation Image:</strong></label><br />
          <img className="violation-image" src={data.violationImage} alt="Violation" />
        </div>
        <div>
          <label><strong>Violation Type:</strong></label>
          <p>{data.violationType}</p>
        </div>
        <div>
          <label><strong>Vehicle Type:</strong></label>
          <p>{data.vehicleType}</p>
        </div>
        <div>
          <label><strong>License Plate Number:</strong></label>
          <p>{data.licensePlateNumber}</p>
        </div>
        <div>
          <label><strong>License Plate Image:</strong></label><br />
          <img className="license-plate-image" src={data.licensePlateImage} alt="License Plate" />
        </div>
        <div>
          <label><strong>Extra Text on Vehicle:</strong></label>
          <p>None</p>
        </div>
      </div>
      <div className="section">
        <h2>Traffic Stats</h2>
        <div>
          <label><strong>Vehicle Count:</strong></label>
          <ul>
            <li>Total: {vehicleCount.total}</li>
            <li>Cars: {vehicleCount.cars}</li>
            <li>Motorbikes: {vehicleCount.motorbikes}</li>
            <li>Bicycles: {vehicleCount.bicycles}</li>
            <li>Trucks: {vehicleCount.trucks}</li>
          </ul>
        </div>
        <div>
          <button onClick={handleReset}>Reset Vehicles Counter</button>
        </div>
      </div>
      <div className="section">
        <h2>Additional Stats</h2>
        <div>
          <label><strong>Congestion:</strong></label>
          <p>{data.congestion}</p>
        </div>
        <div>
          <label><strong>Blockage:</strong></label>
          <p>{data.blockage}</p>
        </div>
        <div>
          <label><strong>Lane Separation:</strong></label>
          <p>{data.laneSeparationMarking}</p>
        </div>
        <div>
          <label><strong>Wrong Lane Detection:</strong></label>
          <p>{data.wrongLaneDetection}</p>
        </div>

        <div>
          <label><strong>Color Segregation:</strong></label>
          <p>{data.colorSegregation}</p>
        </div>
        <div>
          <label><strong>Multiple Penalties:</strong></label>
          <ul>
            {data.multiplePenalties.map((penalty, index) => (
              <li key={index}>{penalty}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataPanel;
