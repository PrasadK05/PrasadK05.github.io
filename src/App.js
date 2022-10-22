import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Intro from './Components/Intro';
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Intro/>
     <AboutMe/>
     <Projects/>
    </div>
  );
}

export default App;
