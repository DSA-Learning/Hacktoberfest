import React from 'react';
import Merge from './components/merge';
import "./styles/app.scss";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Homepage from './components/start';

function App() {

  return (
   
    <Router>  
      <div className="App">
       <Switch >
        <Route path="/" exact  component={Homepage}/>
        <Route path="/merge" exact component={Merge}/>  
       </Switch>
      </div>
    </Router>
  );
}

export default App;
