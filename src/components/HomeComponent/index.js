import React, { Component } from 'react';
import {Link} from "react-router-dom";

import SplitText from './SplitText';
//import Steps from './Steps';
import './Home.css';

export default class Main extends Component {
  render() {
    return (    
      <div className="container">

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
                <a href={"https://drive.google.com/file/d/1z5DmFxXRY2CNvfvaywhdf9woQis0d9r8/view?usp=sharing"} target="_blank" rel="noreferrer" className="nav-link">Resume</a>
              </li>
              <li className="nav-item">
                <a href={"https://github.com/VaibhavSaini2000"} target="_blank" rel="noreferrer" className="nav-link">Github</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="homemainsection">
          <div className="homemainheadingwrapper">
            <div aria-label="Text" className="splitext">
              <SplitText copy="Welcome!" role="heading" />
            </div>
              <div className="homemainheading"> Welcome to the portfolio website by Vaibhav Saini. Don't forget to checkout <span className="maincolouredspan">Algorithms Visualization</span> under Projects Tab.</div>
          </div>
          <div className="homemainimgwrapper">
              <img src='assets/images/mainlandingimg2.png' alt='Online Community'style={{width:"100%" , height:"auto"}}/>
          </div>
        </div>

        {/* <Steps /> */}
      </div>
    )
  }
}
