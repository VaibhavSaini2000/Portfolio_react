import React, { Component } from 'react'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CreatingBars from './CreatingBars';
import Play from '@material-ui/icons/PlayCircleOutlineRounded';
import Forward from '@material-ui/icons/SkipNextRounded';
import Backward from '@material-ui/icons/SkipPreviousRounded';
import RotateLeft from '@material-ui/icons/RotateLeft';
import bubblesort from './sortingalgorithms/bubblesort';
import insertionsort from './sortingalgorithms/insertionsort';
import selectionsort from './sortingalgorithms/selectionsort';
import './SortingVisualizer.css';

export default class SortingVisualizer extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    countBars: 20,
    delay: 100,
    algorithm: 'Selection Sort',
    timeouts: [],
    dropdownOpen: false
  };

  ALGORITHMS = {
		'Bubble Sort': bubblesort,
    'Insertion Sort': insertionsort,
    'Selection Sort': selectionsort,
	};

  componentDidMount() {
    this.generateRandomArray();
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  generateSteps = () => {
		let array = this.state.array.slice();
		let steps = this.state.arraySteps.slice();
		let colorSteps = this.state.colorSteps.slice();

		this.ALGORITHMS[this.state.algorithm](array, 0, steps, colorSteps);

		this.setState({
			arraySteps: steps,
			colorSteps: colorSteps,
		});
	};

	clearTimeouts = () => {
		this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
		this.setState({
			timeouts: [],
		});
	};

	clearColorKey = () => {
		let blankKey = new Array(this.state.countBars).fill(0);

		this.setState({
			colorKey: blankKey,
			colorSteps: [blankKey],
		});
	};
  
  generateRandomNumber = (min,max) => {
    return Math.floor(Math.random() * (max-min) + min);
  }

  generateRandomArray = () => {
    this.clearTimeouts();
		this.clearColorKey();
    const countBars = this.state.countBars;
    const temp = [];

    for(let i = 0; i < countBars; i++) {
      temp.push(this.generateRandomNumber(50,200));
    }
    console.log(temp);
    this.setState({
        array : temp,
        arraySteps : [temp],
        currentStep: 0,
      },
      () => {
        this.generateSteps();
      }
    );
  }

  changeArray = (index, value) => {
		let arr = this.state.array;
		arr[index] = value;
		this.setState(
			{
				array: arr,
				arraySteps: [arr],
				currentStep: 0,
			},
			() => {
				this.generateSteps();
			}
		);
	};

	previousStep = () => {
		let currentStep = this.state.currentStep;
		if (currentStep === 0) return;
		currentStep -= 1;
		this.setState({
			currentStep: currentStep,
			array: this.state.arraySteps[currentStep],
			colorKey: this.state.colorSteps[currentStep],
		});
	};

	nextStep = () => {
		let currentStep = this.state.currentStep;
		if (currentStep >= this.state.arraySteps.length - 1) return;
		currentStep += 1;
		this.setState({
			currentStep: currentStep,
			array: this.state.arraySteps[currentStep],
			colorKey: this.state.colorSteps[currentStep],
		});
	};

	start = () => {
		let steps = this.state.arraySteps;
		let colorSteps = this.state.colorSteps;

		this.clearTimeouts();

		let timeouts = [];
		let i = 0;

		while (i < steps.length - this.state.currentStep) {
			let timeout = setTimeout(() => {
				let currentStep = this.state.currentStep;
				this.setState({
					array: steps[currentStep],
					colorKey: colorSteps[currentStep],
					currentStep: currentStep + 1,
				});
				timeouts.push(timeout);
			}, this.state.delay * i);
			i++;
		}

		this.setState({
			timeouts: timeouts,
		});
	};

  render() {
    let bars = this.state.array.map((value,index) => {
      return <CreatingBars key={index} index={index} height={value} color={this.state.colorKey[index]} changeArray={this.changeArray}/>
    })

    let playButton;

		if (this.state.arraySteps.length === this.state.currentStep) {
			playButton = (
				<button className='controller' onClick={this.generateRandomArray}>
					<RotateLeft />
				</button>
			);
		} else {
			playButton = (
				<button className='controller' onClick={this.start}>
					<Play />
				</button>
			);
		}

    return (
      <div className="sortingvisualizer">
        <h1>Sorting Visualizer</h1>
        <h3>Chosen Algorithm: {this.state.algorithm}</h3>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {this.state.algorithm? this.state.algorithm : <div>Choose Sorting Algorithm</div>}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.setState({algorithm:'Selection Sort'})}>Selection Sort</DropdownItem>
            <DropdownItem onClick={() => this.setState({algorithm:'Bubble Sort'})}>Bubble Sort</DropdownItem>
            <DropdownItem onClick={() => this.setState({algorithm:'Insertion Sort'})}>Insertion Sort</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div className='frame'>
					<div className='barsDiv card'><div className="barscontainer">{bars}</div></div>
				</div>
				<div className='control-pannel'>
					<div className='control-buttons'>
						<button className='controller' onClick={this.previousStep}>
							<Backward />
						</button>
						{playButton}
						<button className='controller' onClick={this.nextStep}>
							<Forward />
						</button>
					</div>
				</div>
				<div className='pannel'></div>
      </div>
    )
  }
}
