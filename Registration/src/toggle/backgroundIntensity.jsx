import  { useState } from 'react';
// import './App.css'; // Assuming you have a CSS file for styling

const Intense = () => {
  const [intensity, setIntensity] = useState(0.5); // Initial intensity value

  const handleChangeIntensity = (event) => {
    const newIntensity = event.target.value;
    setIntensity(newIntensity);
  };

  const backgroundStyle = {
    backgroundColor: `rgba(255, 255, 255, ${intensity})`, // Adjust the intensity of white background
    minHeight: '100vh', // Ensure full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={intensity}
          onChange={handleChangeIntensity}
        />
        <p>Intensity: {intensity}</p>
      </div>
    </div>
  );
};

export default Intense;
