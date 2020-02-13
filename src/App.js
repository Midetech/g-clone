import React from 'react';
import './App.css';
import LandingPage from './components/Landingpage';
import ResultPage from './ResultPage'
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
  
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/result" component={ResultPage}/>
    </Switch>
    
    </div>
  );
}

export default App;
