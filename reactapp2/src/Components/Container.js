import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



class Container extends Component {
  render() {
    return (
      <div className="Container">
      <ul>
        <Link to="fuck"><li>1</li> </Link>
        <Link to="shit"><li>2</li></Link>
        <Link to="hotdamn"><li>3</li></Link>
        <Link to="fuck"><li>4</li></Link>
      </ul>
      </div>
    );
  }
}

export default Container;
