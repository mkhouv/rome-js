import React, { Component } from 'react';
import Fuck from '../../Components/Fuck';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Comp3 extends Component {
    render() {
        return (
            <div>
                <Link to='/Fuck'><h2>All routes lead to Rome</h2></Link>
            </div>    
        )
    }
}

export default Comp3;