import { SportsTennis } from '@material-ui/icons';
import React, {useState,useEffect} from 'react';

const cols = 5;
const rows = 5;

const PathFindingVisualizer = () => {
  const [Grid, setGrid] = useState([]);

  const initializeGrid = () => {
    const grid = new Array(cols);

    for(let i = 0; i < cols; i++)
    {
      grid[i] = new Array(rows);
    }

    createSpot(grid);
  }

  const createSpot = (grid) => {
    for(let i = 0; i < cols; i++)
    {
      for(let j = 0; j < rows; j++)
      {
        grid[i][j] = new Spot(i, j);
      }
    }
  }

  class Spot {
    constructor(i, j) {
      this.x = i;
      this.y = j;
      this.g = 0;
      this.f = 0;
      this.h = 0;
    }
  }
  return(
    <div>
      <h1>Pathfinding Visualizer</h1>
    </div>
  );
}

export default PathFindingVisualizer;