// import React from "react";

function Slider({ intensity }) {
  const handleChangeIntensity = (event) => {
    intensity(event.target.value);
  };

  const backgroundStyle = {
    backgroundColor: `rgba(0,0,255, ${intensity})`, // Adjust the intensity of white background
    minHeight: "full", // Ensure full viewport height
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className="bg-gray-300 rounded-md">
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3  pt-4  ">
        {" "}
        <div style={backgroundStyle}>
          <div>
            <input
              type="range"
              min="0.3"
              max="1"
              step="0.1"
              className="py-2  "
              value={intensity}
              onChange={handleChangeIntensity}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
