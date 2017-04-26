import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Redirect} from 'react-router';
import Container from './Components/Container';
import Fuck from './Components/Fuck.js';
import Hotdamn from './Components/Hotdamn';
import Shit from './Components/Shit';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Container}/>
        <Route path="/fuck" component={Fuck}/>
        <Route path="/shit" component={Shit}/>
        <Route path="/hotdamn" component={Hotdamn}/>
      </div>
    </Router>
    );
  }
}

export default App;
