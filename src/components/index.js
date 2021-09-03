import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './HomeComponent';
import SortingVisualizer from './SortingVisualizer';
import Pathfinder from './PathFindingVisualizer.js';

export default class Main extends Component {
  render() {
    return (
      <Router basename='/'>
        <Switch>
          <Route path='/sortingvisualizer'  component={SortingVisualizer}/>
          <Route path='/pathfinder'  component={Pathfinder}/>
          <Route path='/' component={Home}/>
        </Switch>
      </Router>
    )
  }
}
