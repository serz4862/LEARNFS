import { BrowserRouter, Routes, Route }from "react-router-dom";
import SignUp from "./Signup";
import Login from "./Login";

function App(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element={<SignUp/>}/>
            <Route path = "/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>

    )
}
export default App;