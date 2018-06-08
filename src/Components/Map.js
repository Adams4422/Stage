import React, { Component } from 'react';
import erreur from '../img/erreur.jpg';
import handicap from '../img/Handicap.png';
import iframe from 'react-iframe';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



mapboxgl.accessToken = 'pk.eyJ1IjoibWF4LXN0ZyIsImEiOiJjamkwM2ZkMTgxMGo3M3BvZTlleG5jNzduIn0.AVSMGe0OR8HUfEsWwQM2dA';

var geojson = {
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
              status: '',
              photo : 'url = "http://www.youtube.com/embed/xDMP3i36naA"'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.6386111111111 , 48.1161111]
            },
            properties: {
              title: 'Captor1',
              placenumber : 1,
              description: 'Test',
              id: '70b3d53af0031139',
              status: ''
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
              status: ''
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
              status: ''
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.6399678134918076 , 48.116443008269]
            },
            properties: {
              title: 'Inria',
              placenumber : 2,
              description: 'INRIA',
              id: '',
              status: ''
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
              status: ''
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
              status: ''
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
              status: ''
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
              status: ''
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
              status: ''

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
              status: ''
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.6402413988113267 , 48.1168942610471]
            },
            properties: {
              title: 'Bâtiment 11B',
              placenumber : 1,
              description: '',
              id: '',
              status: ''
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.6385184057553488 , 	48.116422923200915]
            },
            properties: {
              title: 'Bâtiment 13',
              placenumber : 1,
              description: '',
              id: '',
              status: ''
            }
            },
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-1.6382528670628744 ,48.11655006233119]
                },
                properties: {
                  title: 'Bâtiment 13',
                  placenumber : 1,
                  description: '',
                  id: '',
                  status: ''
                }
              },
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: [-1.6366130224863582 , 48.11727412929745]
                  },
                  properties: {
                    title: 'P4',
                    placenumber : 1,
                    description: '',
                    id: '70b3d53af0031138',
                    status: ''
                  }
                },
                  {
                    type: 'Feature',
                    geometry: {
                      type: 'Point',
                      coordinates: [-1.63603064484073 , 48.11684054068611]
                    },
                    properties: {
                      title: 'Bâtiment 5',
                      placenumber : 1,
                      description: '',
                      id: '',
                      status: ''
                    }
                  },
                    {
                      type: 'Feature',
                      geometry: {
                        type: 'Point',
                        coordinates: [-1.6349678134918122 , 48.11757699817833]
                      },
                      properties: {
                        title: 'Bâtiment 7',
                        placenumber : 2,
                        description: '',
                        id: '',
                        status: ''
                      }
                    },
                      {
                        type: 'Feature',
                        geometry: {
                          type: 'Point',
                          coordinates: [-1.635577013227703 , 48.11798576509834]
                        },
                        properties: {
                          title: 'P4',
                          placenumber : 3,
                          description: '',
                          id: '',
                          status: ''
                        }
                      },
                        {
                          type: 'Feature',
                          geometry: {
                            type: 'Point',
                            coordinates: [-1.6366291157404476 , 48.11824376854161]
                          },
                          properties: {
                            title: 'ESIR',
                            placenumber : 1,
                            description: '',
                            id: '',
                            status: ''
                          }
                        },
                          {
                            type: 'Feature',
                            geometry: {
                              type: 'Point',
                              coordinates: [-1.6378984771833984 , 48.11804485617516]
                            },
                            properties: {
                              title: 'Bâtiment 15',
                              placenumber : 2,
                              description: '',
                              id: '',
                              status: ''
                            }
                          },
                            {
                              type: 'Feature',
                              geometry: {
                                type: 'Point',
                                coordinates: [-1.6411582189135743 , 48.12050904567497	]
                              },
                              properties: {
                                title: 'Bâtiment 29',
                                placenumber : 2,
                                description: '',
                                id: '',
                                status: ''
                              }
                            },
                              {
                                type: 'Feature',
                                geometry: {
                                  type: 'Point',
                                  coordinates: [-1.641081945101405 , 48.121033840141486]
                                },
                                properties: {
                                  title: 'Bâtiment 32',
                                  placenumber : 4,
                                  description: '',
                                  id: '',
                                  status: ''
                                }
                              },
                                {
                                  type: 'Feature',
                                  geometry: {
                                    type: 'Point',
                                    coordinates: [-1.6436111111111111 ,48.1202778]
                                  },
                                  properties: {
                                    title: 'Bâtiment 33',
                                    placenumber : 2,
                                    description: '',
                                    id: '',
                                    status: ''
                                  }
                                },
                                  {
                                    type: 'Feature',
                                    geometry: {
                                      type: 'Point',
                                      coordinates: [	-1.6427608508533922 ,	48.12043357846941]
                                    },
                                    properties: {
                                      title: 'P7',
                                      placenumber : 1,
                                      description: '',
                                      id: '',
                                      status: ''
                                    }
                                  },
                                    {
                                      type: 'Feature',
                                      geometry: {
                                        type: 'Point',
                                        coordinates: [-1.6450777840614137 ,	48.11959506871953]
                                      },
                                      properties: {
                                        title: 'Médiathèque',
                                        placenumber : 1,
                                        description: '',
                                        id: '',
                                        status: ''
                                      }
                                    },
                                      {
                                        type: 'Feature',
                                        geometry: {
                                          type: 'Point',
                                          coordinates: [-1.6424770320786592 ,	48.1198171006099]
                                        },
                                        properties: {
                                          title: 'P7',
                                          placenumber : 2,
                                          description: '',
                                          id: '',
                                          status: ''
                                        }
                                      },
                                        {
                                          type: 'Feature',
                                          geometry: {
                                            type: 'Point',
                                            coordinates: [-1.6420720185174105 ,	48.11963446154427]
                                          },
                                          properties: {
                                            title: 'Bâtiment 23',
                                            placenumber : 2,
                                            description: '',
                                            id: '',
                                            status: ''
                                          }
                                        },
                                          {
                                            type: 'Feature',
                                            geometry: {
                                              type: 'Point',
                                              coordinates: [-1.6435344990094336 ,	48.11773661510321]
                                            },
                                            properties: {
                                              title: 'Diapason',
                                              placenumber : 2,
                                              description: '',
                                              id: '',
                                              status: ''
                                            }

          }]
        };

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
    /*-----------HTTP request to get Data from sensors-----------------------------*/
    setInterval(function(){
      var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      var req = new XMLHttpRequest();
      //Requête HTTP
      req.open("GET", "http://primary.aqmo.org/API/sensorsData.php");
      req.addEventListener("load", function(){
        if (req.status >= 200 && req.status < 400) {
            //On met à jour notre tableau
            const data = JSON.parse(req.responseText);
            majSensors(data);
            // add markers to map
            geojson.features.forEach(function(marker) {
              // create a HTML element for each feature
              var el = document.createElement('img');
              el.className = 'marker';
              if(marker.properties.status == "1"){
                el.src = erreur;
              }else{
                el.src = handicap;
              }

              // make a marker for each feature and add to the map
              new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'))
            //  .setHTML('<iframe>' + marker.properties.photo + ' allowFullScreen </iframe>'))
              .addTo(map);
            });
        }else {
          console.error(req.status + " " + req.statusText);
        }

      });
      req.addEventListener("error", function () {
          console.error("Erreur réseau");
      });
      req.send(null);
    }, 10000);
    /*---------------------------------------------------------------*/
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
        <div className='marker' />
      </div>
    );
  }


}

/* Update the geojson file with datas from the sensors */
var majSensors = function(datas) {
    //On parcourt la liste des sensorsData
    geojson.features.forEach((sensor)=>{
      const id = sensor.properties.id;
      if(id!==''){
        console.log(`Id du sensor qu'on mets à jour : ${sensor.properties.id}`);
        //On va chercher les informations qu'on a dans la requête. On cherche un status 0/1/2/3/4/5/F. On ne regarde pas les "" ou n.a
        const newStatus = datas.status.find((status, indice) => {
          return ( (datas.sensorInstallId[indice]==id) && ((new Date(datas.timestamp[indice]) - new Date())/3600000 < 24) && (["0","1","2","3","4","5","F"].includes(status)) );
        });
        console.log("new status : "+newStatus)
        //Si newStatus est "undefined" alors on n'a rien trouvé donc on ne mets pas à jour
        if(newStatus!== undefined){
          sensor.properties.status = newStatus;
          sensor.properties.description = newStatus;
          console.log("Description"+ sensor.properties.description)
        }else{
          sensor.properties.status = "n.a";
        }
      }
    });

  }


export default Map;
