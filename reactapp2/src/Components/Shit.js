import React, { Component } from 'react';
import Container from './Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Shit extends Component {
  render() {
    return (
      <div>
      <Link to='/'> <h2>Shit</h2> </Link>

        <p className="Container-intro">
        </p>
      </div>
    );
  }
}

export default Shit;
