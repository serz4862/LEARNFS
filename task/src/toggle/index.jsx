import  { useState } from 'react';
import './index.css';
// 

function Toggle() {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
    document.body.classList.toggle('active');
  };

  return (
    <div
      id="toggle"
      className={` mb-6 ${
        isActive ? 'active' : ''
      }`}
      onClick={handleToggle}
    >
      <div
        id="indicator"
        className={` ${
          isActive ? 'right-0' : 'left-0'
        }`}
      ></div>
    </div>
  );
}

export default Toggle;
