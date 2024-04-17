import  { useState } from 'react';

const Task = () => {
  const [switch1On, setSwitch1On] = useState(false);
  const [switch2On, setSwitch2On] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);

  const handleSwitch1Toggle = () => {
    setSwitch1On(!switch1On);
  };

  const handleSwitch2Toggle = () => {
    setSwitch2On(!switch2On);
  };

  const handleSliderChange = (e) => {
    setSliderValue(parseInt(e.target.value));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-8">
          <input
            type="checkbox"
            className="toggle-checkbox absolute block w-8 h-8 appearance-none cursor-pointer rounded-full bg-gray-400 border-2 border-transparent outline-none transition-transform duration-300"
            style={{
              transform: switch1On ? 'translateX(100%)' : 'translateX(0)',
            }}
            onChange={handleSwitch1Toggle}
          />
          <div className="toggle-handle absolute left-0 w-8 h-8 bg-blue-500 rounded-full shadow-md"></div>
        </div>
        <div className="relative w-16 h-8">
          <input
            type="checkbox"
            className="toggle-checkbox absolute block w-8 h-8 appearance-none cursor-pointer rounded-full bg-gray-400 border-2 border-transparent outline-none transition-transform duration-300"
            style={{
              transform: switch2On ? 'translateX(100%)' : 'translateX(0)',
            }}
            onChange={handleSwitch2Toggle}
          />
          <div className="toggle-handle absolute left-0 w-8 h-8 bg-blue-500 rounded-full shadow-md"></div>
        </div>
      </div>
      <div className="mx-8">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          className="slider"
          onChange={handleSliderChange}
        />
      </div>
    </div>
  );
};

export default Task;
