// import logo from './logo.svg';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path='/' component={ Home }/>
        {/* <Route path='/projects' component={ Projects }/> */}
      </Routes>
    </div>
  );
}

export default App;
