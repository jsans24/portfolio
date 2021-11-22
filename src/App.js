// import logo from './logo.svg';
// import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
