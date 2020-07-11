import React from 'react';
//import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {Home, About, User} from './views'
import './App.css';

function App(){
  return(
    <Router>
      <div className="App">
        <header className="App-header">        
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/user">User</Link>          
        </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/user">
          <User />
        </Route>
      </Switch>
      </div>
    </Router>
  ); 
}

export default App;