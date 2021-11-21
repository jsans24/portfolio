// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' element={ <Home/> }/>
        <Route path='/projects' element={ <Projects/> }/>
      </Routes>
    </div>
  );
}

export default App;
