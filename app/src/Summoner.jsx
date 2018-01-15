import React from 'react';
import './styles/summoner.less';

import SummonerHeader from './SummonerHeader.jsx';
import SummonerTier from './SummonerTier.jsx';
import SummonerPlayOften from './SummonerPlayOften.jsx';
import SummonerInfo from './SummonerInfo.jsx';
import SummonerHistory from './SummonerHistory.jsx';

class Summoner extends React.Component {
  constructor(props) {
    super(props);
    let url = this.props.location.pathname;
    let name = url.substr(url.lastIndexOf('/') + 1);
    this.state = {
      error: false,
      isLoaded: false,
      status: {},
      summoner: {
        name: name,
      },
    }
  }

  componentDidMount() {
    let summoner = this.state.summoner;
    fetch('/api/summoner/' + this.state.summoner.name)
      .then(res => res.json())
      .then((result) => {
          if(result.status) {
            this.setState({
              status: result.status,
              error: true
            });
          } else {
            summoner = result;
            this.setState({
              summoner: summoner
            });
            this.getChampionMasteries();
          }
      })
  }

  getChampionMasteries() {
    let summoner = this.state.summoner;
    fetch('/api/summoner/champion-masteries/' + this.state.summoner.id)
      .then(res => res.json())
      .then((result) => {
          if(result) {
            summoner.masteries = result;
            this.setState({
              summoner: summoner
            });
            this.getChampionDataById();
          }
      });
  }

  getChampionDataById() {
    let summoner = this.state.summoner;
    fetch('/api/champion/champion-data/' + summoner.masteries[0].championId)
      .then(res => res.json())
      .then((result) => {
          if(result) {
            summoner.mainHero = result.name;
            this.setState({
              summoner: summoner,
              isLoaded: true
            });
          }
      });
  }

  render() {
    const { error, isLoaded, status, summoner } = this.state;
    var style = {};
    if(error) {
      return (
        <div className="container">
          <h1>{status.status_code} Error</h1>
          <p>{status.message}</p>
        </div>
      )
    } else if (!isLoaded) {
      return (<div className="container">Loading...</div>)
    } else {
      return (
        <div className="container">
          <SummonerHeader summoner={summoner} />
          <div className="summoner-body">
            <div>
              <SummonerTier summonerId={summoner.id} />
              <SummonerPlayOften />
            </div>
            <div>
              <SummonerInfo summoner={summoner} />
              <SummonerHistory />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Summoner;
