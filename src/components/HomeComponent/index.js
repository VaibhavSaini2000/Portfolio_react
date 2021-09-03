import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Particles from 'react-particles-js';
import SplitText from './SplitText';
import Steps from './Steps';
import './Home.css';

export default class Main extends Component {
  render() {
    return (    
      <div className="container">
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
                "attract": {
                  "rotate": {
                    "x": 600,
                    "y": 1200
                  }
                },
                "enable": true,
                "outModes": {
                  "bottom": "out",
                  "left": "out",
                  //"right": "out",
                  //"top": "out"
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
                  "speed": 3,
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
                  "speed": 20,
                  "minimumValue": 0.1
                }
              }
            }
          }}
        />

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand" >
            <span style={{color: 'rgb(0, 28, 85)'}}> &lt;</span>
            <span className="logo-name" style={{color: 'rgb(0, 28, 85)',fontFamily:'Agustina Regular'}}>Vaibhav Saini</span>
            <span style={{color: 'rgb(0, 28, 85)'}}>/&gt;</span>
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <Link to={"/"} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/projects"} className="nav-link">Projects</Link>
              </li>
              <li className="nav-item">
                <Link to={"/resume"} className="nav-link">Resume</Link>
              </li>
              <li className="nav-item">
                <Link to={"https://github.com/VaibhavSaini2000"} className="nav-link">Github</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="homemainsection">
          <div className="homemainheadingwrapper">
            <h1  aria-label="Text" role="heading" className="splitext">
              <SplitText copy="Welcome!" role="heading" />
            </h1>
              <div className="homemainheading"> Welcome to the portfolio website by <span className="maincolouredspan">Vaibhav</span> Saini. Don't forget to checkout Algorithms Visualization.</div>
          </div>
          <div className="homemainimgwrapper">
              <img src='assets/images/mainlandingimg2.png' alt='Online Community'style={{width:"auto" , height:"100%"}}/>
          </div>
        </div>

        {/* <Steps /> */}
      </div>
    )
  }
}
