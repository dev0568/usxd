import React from 'react';
import Navbar from './components/Home/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';

function App() {
  return (
    <div>    <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
        
    </Router>
    </div>

    
  );
}

export default App;
