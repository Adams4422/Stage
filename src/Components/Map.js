import React, { Component } from 'react';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');


mapboxgl.accessToken = 'pk.eyJ1IjoibWF4LXN0ZyIsImEiOiJjamkwM2ZkMTgxMGo3M3BvZTlleG5jNzduIn0.AVSMGe0OR8HUfEsWwQM2dA';

class Map extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    var Beaulieu = new mapboxgl.LngLat(-1.643380, 48.116269);

    //bounds coord of the map
    var sw = new mapboxgl.LngLat(-1.656769, 48.110452);
    var ne = new mapboxgl.LngLat(-1.628488, 48.124778);
    var BeaulieuBounds = new mapboxgl.LngLatBounds(sw,ne);

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v10',
      center: Beaulieu,
      maxBounds: BeaulieuBounds,
      doubleClickZoom: true,
	    pitch:40,
      zoom: 3
    });

    var geojson  = {
      type: 'FeatureCollection',
      features: [{
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6377777777777778 , 48.115]
        },
        properties: {
          title: 'Accueil',
          description: 'Accès : Barrière personnel faculté',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6355555555555554 , 48.1158333]
        },
        properties: {
          title: 'GEA',
          placenumber : 2,
          description: '',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6394444444444445 , 48.115]
        },
        properties: {
          title: 'Institut des Sciences Chimiques de Rennes',
          placenumber : 1,
          description: '',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.64 , 48.1163889]
        },
        properties: {
          title: 'Inria',
          placenumber : 2,
          description: 'place 1/2',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.64 , 48.11646]
        },
        properties: {
          title: 'Inria',
          placenumber : 2,
          description: 'place 2/2',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6411111111111112 , 48.1155556]
        },
        properties: {
          title: 'Institut des Sciences Chimiques de Rennes',
          placenumber : 1,
          description: '',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6402777777777777 , 48.1147222]
        },
        properties: {
          title: 'PNRB',
          placenumber : 2,
          description: '',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6413888888888888 , 48.1169444]
        },
        properties: {
          title: 'IETR',
          placenumber : 2,
          description: '',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6416666666666666 , 48.1177778]
        },
        properties: {
          title: 'Pôle de mécanique et technologie',
          placenumber : 2,
          description: '',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6416666666666666 , 48.1180556]
        },
        properties: {
          title: 'SIMPPS',
          placenumber : 2,
          description: 'Service santé des étudiants',
          id: '',
          statut: ''

        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.6427777777777777 , 48.1180556]
        },
        properties: {
          title: 'SAVE',
          placenumber : 3,
          description: 'Pôle handicap',
          id: '',
          statut: ''
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-1.64 , 48.1169444]
        },
        properties: {
          title: 'Bâtiment 11B',
          placenumber : 1,
          description: '',
          id: '',
          statut: ''
        }

      }]
    };



  // add markers to map
  geojson.features.forEach(function(marker) {

    // create a HTML element for each feature
    var el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
    .setLngLat(marker.geometry.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
    .addTo(map);
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
      <div>
        <div style={style} ref={el => this.mapContainer = el} />
        <div className='marker'/>
      </div>
    );
  }

}

export default Map;
