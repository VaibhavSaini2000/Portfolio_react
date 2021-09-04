import React, { Component } from 'react';
import './Steps.css';
class Steps extends Component {

    constructor(props) {
      super(props);
      this.state = {
        };
    }

    componentDidMount() {
    
    }

    render() {
        return (
            <>
            <div className="homesecondsection">
                <div className="container">
                    <div className="hwdsitwork">
                        Who am I?
                    </div>
                    <div className="firststep">
                        <div className="homesecondheadingwrapper">
                            <div className="homesecondheading"> 
                                <span className="secondcolouredspan"> Intro! </span><br/>Final Year UG at IIT Kharagpur!
                            </div>
                        </div>
                        <div className="homesecondimgwrapper">
                            <img src='assets/images/myphoto.jpg' alt='Vaibhav' style={{width:"100%" , height:"auto"}}/>
                        </div>
                    </div>

                    {/* <div className="firststep">
                        <div className="homesecondimgwrapper">
                            <img src='assets/images/fourthlandingimg2.png' alt='Online Community'style={{width:"100%" , height:"auto"}}/>
                        </div>
                        <div className="homesecondheadingwrapper">
                            <div className="homesecondheading"> 
                                <span className="secondcolouredspan"> Learn </span><br/>Learn about your symptoms and how to manage them
                            </div>
                        </div>

                    </div>

                    <div className="firststep">
                        <div className="homesecondheadingwrapper">
                            <div className="homesecondheading"> 
                                <span className="secondcolouredspan"> Heal </span><br/>If this is not enough, take the help of our resources to heal
                            </div>
                        </div>
                        <div className="homesecondimgwrapper">
                            <img src='assets/images/fifthlandingimg.png' alt='Online Community'style={{width:"100%" , height:"auto"}}/>
                        </div>
                    </div> */}
                </div>
            </div>
            </>
        );
    }
}

export default Steps;