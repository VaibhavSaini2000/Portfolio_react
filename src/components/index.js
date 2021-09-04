import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import Home from './HomeComponent';
import ProjectsPage from './ProjectsPage';
import SortingVisualizer from './SortingVisualizer';
import Pathfinder from './PathFindingVisualizer.js';
import Queen from './QueensProblemVisualizer';

export default class Main extends Component {
  render() {
    return (
      <>
        <Particles
          params={{
            "background": {
              "color": {
                "value": "#77ACF1"
              },
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            },
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "particles": {
                "number": {
                    "value": 160,
                    "density": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "speed": 4,
                        "size_min": 0.3
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "random": true,
                    "speed": 1,
                    "direction": "top",
                    "out_mode": "out"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "repulse"
                    }
                },
                "modes": {
                    "bubble": {
                        "distance": 250,
                        "duration": 2,
                        "size": 0,
                        "opacity": 0
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 4
                    }
                }
            }
        }} />
        {/* <Particles 
          params={{
            "background": {
              "color": {
                "value": "#77ACF1"
              },
              "position": "50% 50%",
              "repeat": "no-repeat",
              "size": "cover"
            },
            "fullScreen": {
              "enable": true,
              "zIndex": -1
            },
            "interactivity": {
              "events": {
                "onClick": {
                  "enable": false,
                  "mode": "push"
                },
                "onHover": {
                  "enable": true,
                  "mode": "grab",
                  "parallax": {
                    "enable": false,
                    "force": 60
                  }
                }
              },
              "modes": {
                "bubble": {
                  "distance": 400,
                  "duration": 5,
                  "opacity": 0.8,
                  "size": 100
                },
                "grab": {
                  "distance": 400
                }
              }
            },
            "particles": {
              "color": {
                "value": "#FFF"
              },
              "links": {
                "color": {
                  "value": "#FFF"
                },
                "distance": 150,
                "enable": true,
                "opacity": 0.4
              },
              "move": {
                // "attract": {
                //   "rotate": {
                //     "x": 600,
                //     "y": 1200
                //   }
                // },
                "enable": true,
                "outModes": {
                  "bottom": "out",
                  "left": "out",
                  "right": "out",
                  "top": "out"
                }
              },
              "number": {
                "density": {
                  "enable": false
                }
              },
              "opacity": {
                "random": {
                  "enable": true
                },
                "value": {
                  "min": 0.1,
                  "max": 0.5
                },
                "animation": {
                  "enable": false,
                  "speed": 1,
                  "minimumValue": 0.1
                }
              },
              "size": {
                "random": {
                  "enable": true
                },
                "value": {
                  "min": 1,
                  "max": 10
                },
                "animation": {
                  "enable": false,
                  "speed": 5,
                  "minimumValue": 0.1
                }
              }
            }
          }}
        /> */}
        <Router basename='/'>
          <Switch>
            <Route path='/sortingvisualizer'  component={SortingVisualizer}/>
            <Route path='/pathfinder'  component={Pathfinder}/>
            <Route path='/nqueens'  component={Queen}/>
            <Route path='/projects' component={ProjectsPage}/>
            <Route path='/' component={Home}/>
          </Switch>
        </Router>
      </>
    )
  }
}
