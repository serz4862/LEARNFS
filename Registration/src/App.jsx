// import { BrowserRouter, Routes, Route }from "react-router-dom";
// import SignUp from "./Signup";
// import Login from "./Login";
import Slider from "./toggle/slider";
import BgChanger from "./toggle/bgChanger";
import Intense from "./toggle/backgroundIntensity";
// import Toggle from "./practice/toggle";
function App(){
    return (

        <div >

        <Slider/>
        <Intense/>
        {/* <Toggle/> */}
        <BgChanger/>

        </div>

    )
}
export default App;         
