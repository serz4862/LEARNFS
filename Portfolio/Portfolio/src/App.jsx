import  { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact'
import Resume from './components/Resume'
import Aos from "aos";
import "aos/dist/aos.css"
import Task from "./components/Task";


const App = () => {
 useEffect(() => {
  Aos.init();
  
 }, [])
 
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Resume/>
        <Contact />
        <Task/>
      </div>
    </>
  );
};

export default App;