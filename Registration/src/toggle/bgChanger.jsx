import {useState} from 'react'

function BgChanger() {
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState();
    

    const toggleButton = ()=>{
        setToggle(!toggle)
    }
  return (
    <div>
        <button onClick={toggleButton}>
        {toggle? <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}></div> : null}
    </button>
    </div>

  )
}

export default BgChanger