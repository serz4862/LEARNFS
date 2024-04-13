import { useState, useCallback } from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState();

  const passwordGenerator = useCallback(()=>{
    let pass =""
    let str = ""
  }, [length,numberAllowed,charAllowed,setPassword]);

  
  return (
    <div className="bg-black w-full h-screen duration-200s">

      <div className=" rounded-full bg-gray-700 py-5 text-center mx-10 px-5">
        <input 
        type="text" 
        className="rounded-full"
        />
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600">click</button>
      </div>

    </div>

  )
}

export default App
