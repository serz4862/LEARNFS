import {useState} from 'react'


function Toggle() {
    const[show, setShow] = useState(true);
  return (
    <div>
        {
            show?<h1>hello world</h1>:null
        }
        <button onClick={()=>setShow(!show)}>Toggle</button>
    </div>
  )
}

export default Toggle