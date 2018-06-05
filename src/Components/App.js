import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Map from './Map.js';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div>
        <Map/>
      </div>
    );
  }
}

export default App;
