import './App.css';
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact/contact';
import Intro from './components/Intro/Intro';
import Navigation from './components/Navigation/Navigation';
import Project from './components/Project/Project';
import Tools from './components/Tools/Tools';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <div className="App">
      <div className="App-header">
        <Navigation />
        <Home />
        <Intro />
        <Project />
        <Tools />
        <Contact />
      </div>
      <div className="nav-wholer">
          <Routes>
            <Route path="project" element={<Project />} />
            <Route path="contact" element={<h1>Hello</h1>} />
          </Routes>
        </div>
    </div>
  </>
  );
}

export default App;
