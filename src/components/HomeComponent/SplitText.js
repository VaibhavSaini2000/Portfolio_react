import React, { Component } from 'react';
import './SplitText.css';

class SplitText extends Component {

    constructor(props) {
      super(props);
      this.state = {
        };
    }
    
    render(){
    return(
        <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function(char, index){
            const style = {"animation-delay": (0.5 + index / 10) + "s"};
            return <span
                aria-hidden="true"
                key={index}
                style={style}>
                {char}
            </span>;
        })}
        </span>
    );
}
}

export default SplitText;