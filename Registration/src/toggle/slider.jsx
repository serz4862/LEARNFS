import { useState } from "react";

function Slider() {
  const [color, setColor] = useState("Black");
//   const [switchOn, setSwitchOn] = useState(false);
  const [intensity, setIntensity] = useState(0.5);

  const handleChangeIntensity = (event) => {
    const newIntensity = event.target.value;
    setIntensity(newIntensity);
  };

  const backgroundStyle = {
    backgroundColor: `rgba(255, 255, 255, ${intensity})`, // Adjust the intensity of white background
    minHeight: 'full', // Ensure full viewport height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

// const handleSwitch=()=>{
//     setSwitchOn(!switchOn);
// };
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="w-full h-screen flex justify-center text-center font-bold  text-7xl font-serif text-black text-shadow-lg">
        {" "}
        <div style={backgroundStyle}>
      <div>
        <input
          type="range"
          min="0.3"
          max="1"
          step="0.1"
          value={intensity}
          onChange={handleChangeIntensity}
        />
        <p>Intensity: {intensity}</p>
      </div>
    </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-gray-700">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        {/* {color ? style= {{backgroundColor :"black"}}: style={{backgroundColor :"red"}}} */}

          <button
         
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 bg-red-500 hover:bg-red-700 py-1 rounded-full text-white shadow-lg"
          >
            RED
          </button>



        </div>
      </div>
    </div>
  );
}

export default Slider;
