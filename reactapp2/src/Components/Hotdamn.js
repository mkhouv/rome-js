import React, { Component } from 'react';
import Container from './Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Hotdamn extends Component {
  render() {
    return (
      <div>
      <Link to='/'> <h2>Hot Damn!</h2> </Link>

      </div>
    );
  }
}

export default Hotdamn;
