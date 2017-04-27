import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {Redirect} from 'react-router';
import Container from './Components/Container';
import Fuck from './Components/Fuck';
import Hotdamn from './Components/Hotdamn';
import Shit from './Components/Shit';
import Compo2 from './Compo2';
import Comp3 from './folder1/folder2/Comp3';

class App extends Component {
  render() {
    return (
    <div> 
    <Router>
      <div className="App">
        <Compo2 path="a"/>
        <Route exact path="/" component={Container}/>
        <Route path="/fuck" component={Fuck}/>
        <Route path="/shit" component={Shit}/>
        <Route path="/hotdamn" component={Hotdamn}/>
        <div><Comp3 /></div>
      </div>
    </Router>
    </div>
    );
  }
}

export default App;
