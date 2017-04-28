import React, { Component } from 'react';
import Container from './Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Puckpuck from './puckpuck';

  


class Fuck extends Component {
  render() {
    return (
      <div className="Container">
        <Link to='/'> <h2>FUCK</h2> </Link>
        <Puckpuck />
        <Container />
    </div>
    );
  }
}


export default Fuck;
