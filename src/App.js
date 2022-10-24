import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';
import Calendar from './Components/Calendar';
import Stats from './Components/Stats';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <AboutMe/>
     <Projects/> 
     <Calendar/>
     <Stats/>
    </div>
  );
}

export default App;
