import React, { Component } from 'react';
import Container from './Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



let headlines = [];

for (let i = 0; i < 4; i++) {
    headlines.push(<h2 key={i}>puckpuck Motherfuckfuck</h2>)
}
class Puckpuck extends Component {
  render() {
    return (
      <div className="Container">
        {headlines}
    </div>
    );
  }
}



export default Puckpuck