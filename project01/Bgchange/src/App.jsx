import { useState } from "react"

function App() {
  const [color,setColor] = useState("black");
  return (
    <div className="w-full h-screen duration-200"
    style= {{backgroundColor :color}}>
      <div className="flex justify-center text-center font-bold py-16 text-7xl font-serif text-black text-shadow-lg"> ISHIKA RANJAN</div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={()=>{setColor("red")}}
        className="outline-none px-4 bg-red-500 hover:bg-red-700 py-1 rounded-full text-white shadow-lg"
        >RED</button>
        <button 
        onClick={()=>{setColor("orange")}}
         className="outline-none bg-orange-500 hover:bg-orange-700 px-4 py-1 rounded-full text-white shadow-lg"
        >ORANGE</button>
        <button
        onClick={()=>{setColor("yellow")}}
         className="outline-none bg-yellow-500 hover:bg-yellow-700 px-4 py-1 rounded-full text-white shadow-lg"
        >YELLOW</button>
        <button
        onClick={()=>{setColor("green")}}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "green"}}>GREEN</button>
        <button 
        onClick={()=>{setColor("blue")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "blue"}}>BLUE</button>
        <button 
        onClick={()=>{setColor("indigo")}}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "indigo"}}>INDIGO</button>
        <button
        onClick={()=>{setColor("violet")}}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "violet"}}>VIOLET</button>
        {/* <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor: "red"}}>RED</button> */}


      </div>
      </div>
    </div>
  )

}

export default App
