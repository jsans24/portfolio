import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/projects' component={ Projects }/>
      </Switch>
    </div>
  );
}

export default App;
