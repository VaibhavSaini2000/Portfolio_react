import React, { Component } from 'react';
import {Link} from "react-router-dom";

export default class ProjectsPage extends Component {
  render() {
    return (    
      <div className="container">
        <Link to={"/sortingvisualizer"}>
            <span style={{color:"white"}}>
                Sorting Algorithms Visualizer
            </span>
        </Link>
        <Link to={"/pathfinder"}>
            <span style={{color:"white"}}>
                Path Finding Algorithms Visualizer
            </span>
        </Link>
        <Link to={"/nqueens"}>
            <span style={{color:"white"}}>
                N-Queens Problem Visualizer
            </span>
        </Link>
      </div>
    );
  }
}