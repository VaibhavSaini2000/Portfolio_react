import React from 'react';
import './CovidVisualizer.css';
import { CountryChart } from './Charts/CountryChart';
import { CountriesChart } from './Charts/CountriesChart';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CovidVisualizer extends React.Component{
  constructor(){
    super();
    this.state = {
      countries:[],
      stats:[],
      countrystats:[],
      chartdata: [],
      country: {},
      globalstats: {},
      global: true
    }
    this.changecountry = this.changecountry.bind(this);
    this.changeupperdate = this.changeupperdate.bind(this);
    this.changelowerdate = this.changelowerdate.bind(this);
  }

  async changecountry(country) {
    this.setState({country});

    if(this.state.country) {
      const resp = await fetch(`https://api.covid19api.com/total/country/${country.Slug}`)
      const data = await resp.json()
      
      this.setState({countrystats:data});
      this.setState({chartdata:data});
      this.setState({lowerdate:data[0].Date});
      this.setState({upperdate:data[data.length-1].Date});
    }
  }

  async changeupperdate(uppdate) {

    if(uppdate<this.state.lowerdate) {
        this.setState({upperdate:this.state.lowerdate})
    }
    else {
      this.setState({upperdate:uppdate});
    }

    var data = this.state.countrystats;
    data = data.filter((item) => {
        return item.Date >= this.state.lowerdate &&
               item.Date <= uppdate;
    });

    this.setState({chartdata:data});
  }

  async changelowerdate(lowdate) {
    if(lowdate>this.state.upperdate) {
        this.setState({lowerdate:this.state.upperdate-86400})
    }
    else {
        this.setState({lowerdate:lowdate});
    }

    var data = this.state.countrystats;
    data = data.filter((item) => {
        return item.Date >= lowdate &&
               item.Date <= this.state.upperdate;
    });

    this.setState({chartdata:data});
  }

  async componentDidMount(){
    const resp = await fetch('https://api.covid19api.com/summary');
    const res =await resp.json();

    const stats = res.Countries;
    const globalstats = res.Global;

    this.setState({stats});
    this.setState({globalstats});
  }
  render(){
    return(
            <div className="CovidVisualizer">
              <h3 className='back'><Link to='/projects' className='backlink'>Back to Projects</Link></h3>
              <h1>COVID-19 STATISTICS</h1>
              <Dropdown className='dropdownn'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.global?<>Global Statistics</>:<span>Country-wise Statistics</span>}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{overflowY: 'scroll', maxHeight: (window.innerHeight - (this.myRef ? (this.myRef.getBoundingClientRect().top + this.myRef.getBoundingClientRect().height + 100) : 200))}}>
                  <Dropdown.Item key="global" onClick={(e) => this.setState({global:true})}>Global Statistics</Dropdown.Item>
                  <Dropdown.Item key="countrywise" onClick={(e) => this.setState({global:false})}>Country-wise Statistics</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {this.state.global ?
                <>
                  <div className='boxes'>
                    <div className='indigo'>
                      Total Confirmed = {this.state.globalstats.TotalConfirmed}
                    </div>
                    <div className='purple'>
                      Total Recovered = {this.state.globalstats.TotalRecovered}
                    </div>
                    <div className='red'>
                      Total Deaths = {this.state.globalstats.TotalDeaths}
                    </div>
                  </div>
                  <CountriesChart stats = {this.state.stats}/> 
                </>
                :
                <>
                  <div className="filters">
                    <Dropdown>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                          {this.state.country.Country?<>{this.state.country.Country}</>:<span>Choose Country</span>}
                      </Dropdown.Toggle>

                      <Dropdown.Menu style={{overflowY: 'scroll', maxHeight: (window.innerHeight - (this.myRef ? (this.myRef.getBoundingClientRect().top + this.myRef.getBoundingClientRect().height + 100) : 200))}}>
                          {this.state.stats.map(countr => <Dropdown.Item key={countr.ID} onClick={(e) => this.changecountry(countr,e)}>{countr.Country}</Dropdown.Item>)}
                      </Dropdown.Menu>
                    </Dropdown>

                    {this.state.country.Country ?  
                      <>
                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                              {this.state.lowerdate?<>{this.state.lowerdate}</>:<span>Choose Lower Date</span>}
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{overflowY: 'scroll', maxHeight: (window.innerHeight - (this.myRef ? (this.myRef.getBoundingClientRect().top + this.myRef.getBoundingClientRect().height + 100) : 200))}}>
                              {this.state.countrystats?.map(lowdate => <Dropdown.Item key={lowdate?.ID} onClick={(e) => this.changelowerdate(lowdate.Date,e)}>{lowdate.Date}</Dropdown.Item>)}
                          </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown>
                          <Dropdown.Toggle variant="success" id="dropdown-basic">
                              {this.state.upperdate?<>{this.state.upperdate}</>:<span>Choose Upper Date</span>}
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{overflowY: 'scroll', maxHeight: (window.innerHeight - (this.myRef ? (this.myRef.getBoundingClientRect().top + this.myRef.getBoundingClientRect().height + 100) : 200))}}>
                              {this.state.countrystats?.map(uppdate => <Dropdown.Item key={uppdate?.ID} onClick={(e) => this.changeupperdate(uppdate.Date,e)}>{uppdate.Date}</Dropdown.Item>)}
                          </Dropdown.Menu>
                        </Dropdown>
                      </>  : 
                      <></> 
                    }
                  </div>

                  {this.state.country.Country ?  
                    <div className='boxes'>
                      <div className='indigo'>
                        Total Confirmed = {this.state.country.TotalConfirmed}
                      </div>
                      <div className='purple'>
                        Total Recovered = {this.state.country.TotalRecovered}
                      </div>
                      <div className='red'>
                        Total Deaths = {this.state.country.TotalDeaths}
                      </div>
                    </div>:
                    <></>
                  }
                  <CountryChart stats = {this.state.chartdata}/>
                </>
              }
          </div>
    )
  }
}

export default CovidVisualizer;
