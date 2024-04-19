// import React from 'react'
import { useState } from 'react';
import Slider from "./components/Slider";
import Toggle from "./toggle";
// import ToggleB from "./toggle1";

function App() {
  const [toggleAOn, setToggleAOn] = useState(false);
  const [toggleBOn, setToggleBOn] = useState(true); // Set one toggle on by default

  const handleToggleA = () => {
    setToggleAOn(toggleBOn);
  };

  const handleToggleB = () => {
    setToggleBOn(toggleBOn);
  };

  return (
    <div className="w-full max-w-md mx-auto flex shadow-lg rounded-lg px-4 py-3  pt-4 ">
      <div className="">
        <Toggle isActive={toggleAOn} onToggle={handleToggleA} />
        <Toggle isActive={toggleBOn} onToggle={handleToggleB} />
        <div className="flex items-center justify-center rounded-lg">
          <Slider intensity={toggleAOn ? 1 : 0.5} />
        </div>
      </div>
    </div>
  );
}

export default App;
