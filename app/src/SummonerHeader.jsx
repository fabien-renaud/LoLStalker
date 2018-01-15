import React from 'react';

const profileIconURL = profileIconId => 'http://ddragon.leagueoflegends.com/cdn/8.1.1/img/profileicon/' + profileIconId + '.png';
const summonerHeroBanner = summonerHero => 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + summonerHero + '_0.jpg';

class SummonerHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: this.props.summoner
    }
  }

  render() {
    const { summoner } = this.state;
    return (
      <div className="summoner-header">
        <div className="summoner-hero-banner-wrap">
          {/* <img src={summonerHeroBanner(summoner.mainHero)} className="summoner-hero-banner"></img> */}
          <img src={summonerHeroBanner("Jinx")} className="summoner-hero-banner"></img>
        </div>
        <div className="summoner-header-info">
          <img src={profileIconURL(summoner.profileIconId)}></img>
          <h1>{summoner.name}</h1>
          <span className="summoner-level">{summoner.summonerLevel}</span>
        </div>
        <ul className="summoner-menu">
          <li>Global</li>
          <li>Current Game</li>
          <li>Champion Masteries</li>
          <li>Runes</li>
        </ul>
      </div>
  )}
}

export default SummonerHeader;
