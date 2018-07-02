import React, { Component } from 'react';
import busy from '../img/erreur.jpg';
import handicap from '../img/Handicap.png';
import Iframe from 'react-iframe';
import pano from '../img/panoTest.jpg'
import available from '../img/hand_vert.png';
import noinformation from '../img/NA.jpg';
import pano2 from '../img/pano2.jpg';
import erreur from '../img/handicap.orange.png';
import style from '../style.json';
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
              id: [],
              status: [],
              image: "pano2"
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.6386111111111 , 48.1161111]
            },
            properties: {
              title: 'IRISA Test',
              placenumber : 2,
              description: 'Test',
              id: ['70b3d53af0031139', '70b3d53af0031137'],
              status: []
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
              id: [],
              status: []
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
              id: [],
              status: []
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
              id: [],
              status: []
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
              id: [],
              status: []
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [-1.6402804236930706 , 48.114503988522685]
            },
            properties: {
              title: 'PNRB',
              placenumber : 2,
              description: '',
              id: ["70b3d53af0031136"],
              status: [],
              image : "PNRB"
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
              id: [],
              status: []
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
              id: [],
              status: []
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
              id: [],
              status: []

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
              id: [],
              status: []
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
              id: [],
              status: []
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
              id: [],
              status: []
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
                  id: [],
                  status: []
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
                    id: ['70b3d53af0031138'],
                    status: []
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
                      id: [],
                      status: []
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
                        id: [],
                        status: []
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
                          id: [],
                          status: []
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
                            id: [],
                            status: []
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
                              id: [],
                              status: []
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
                                id: [],
                                status: []
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
                                  id: [],
                                  status: []
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
                                    id: [],
                                    status: []
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
                                      id: [],
                                      status: []
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
                                        id: [],
                                        status: []
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
                                          id: [],
                                          status: []
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
                                            id: [],
                                            status: []
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
                                              id: [],
                                              status: []
                                            }
                                          },
                                          {
                                            type: 'Feature',
                                            geometry: {
                                              type: 'Point',
                                              coordinates: [-1.63945265420341 ,	48.1158191092968]
                                            },
                                            properties: {
                                              title: 'IRISA',
                                              placenumber : 3,
                                              description: '',
                                              id: [],
                                              status: [],
                                              image : "IRISA_3"
                                            }
                                          },
                                          {
                                            type: 'Feature',
                                            geometry: {
                                              type: 'Point',
                                              coordinates: [-1.64048 ,	48.114343]
                                            },
                                            properties: {
                                              title: 'PNRB',
                                              placenumber : 1,
                                              description: 'Demo sensor39',
                                              id: ["70b3d53af0031139"],
                                              status: [],
                                              image : "PNRB"
                                            }
                                          }

          ]
        };

class Map extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    var Beaulieu = new mapboxgl.LngLat(-1.638895, 48.115823);

    //bounds coord of the map
    var sw = new mapboxgl.LngLat(-1.64635, 48.111676);
    var ne = new mapboxgl.LngLat(-1.630883,  48.12221 );
    var BeaulieuBounds = new mapboxgl.LngLatBounds(sw,ne);

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: style,
      //style: 'mapbox://styles/mapbox/streets-v10',
      center: Beaulieu,
      maxBounds: BeaulieuBounds,
      doubleClickZoom: true,
	    pitch:40,
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
              //Update the picture depending on the avaibility
              if(marker.properties.status.includes("0")){
                el.src = available;
              }else if(marker.properties.status.includes("n.a")||marker.properties.status.includes("")||(marker.properties.status.length == 0)||(marker.properties.status.includes("2"))){
                el.src = noinformation;
              }else if(marker.properties.status.includes("1")){
                el.src = busy;
              }else{
                el.src = erreur;
              }

              // make a marker for each feature and add to the map
              new mapboxgl.Marker(el)
              .setLngLat(marker.geometry.coordinates)
              .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
              .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description +
              '</p><iframe width="100%" height="300" allowfullscreen style="border-style:none;" src="https://cdn.pannellum.org/2.4/pannellum.htm?panorama=https://epleanif.sirv.com/Images/'+marker.properties.image+'.jpg"></iframe><'))
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
    //On parcourt la liste des sensors
    geojson.features.forEach((marker)=>{
      marker.properties.id.forEach((id, index)=>{
        //Si l'id a été renseigné
        if(id!==''){
          var i=0;
          console.log(`Id du sensor qu'on mets à jour : ${id}`);
          //On va chercher les informations qu'on a dans la requête. On cherche un status 0/1/2/3/4/5/F. On ne regarde pas les "" ou n.a
          const newStatus = datas.status.find((status, indice) => {
            i = indice;
            return ( (datas.sensorInstallId[indice]==id) && ((new Date(datas.timestamp[indice]) - new Date())/3600000 < 24) && (["0","1","2","3","4","5","F"].includes(status)) );
          });
          console.log("new status : "+newStatus)
          //Si newStatus est "undefined" alors on n'a rien trouvé donc on met "n.a"
          if(newStatus!== undefined){
            if(newStatus == "2"){
              if(datas.parkFlag[i]=="1"){
                marker.properties.status[index] = "1";
              }else{
                marker.properties.status[index] = "0";
              }
            }else{
              marker.properties.status[index] = newStatus;
            }
          }else{
            marker.properties.status[index] = "n.a";
          }
        }
      });
    });

  }


export default Map;
