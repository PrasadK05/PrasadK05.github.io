import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Calendar from './Components/Calendar';
import Stats from './Components/Stats';
import Skills from './Components/Skills';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <AboutMe/>
     <Skills/>
     <Projects/> 
     <Calendar/>
     <Stats/>
     <Contact/>
    </div>
  );
}

export default App;
