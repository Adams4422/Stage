import React, { Component } from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


mapboxgl.accessToken = 'pk.eyJ1IjoibWF4LXN0ZyIsImEiOiJjamkwM2ZkMTgxMGo3M3BvZTlleG5jNzduIn0.AVSMGe0OR8HUfEsWwQM2dA';

class Map extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      //Centrer sur Beaulieu avec bon zoom
      center: [-1.6371321999999964, 48.11573389999999],
      zoom: 15
    });

  }


  render(){
    const style ={
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: '100%'
    };

    return(
      <div style={style} ref={el => this.mapContainer = el} />
    );
  }

}

export default Map;
