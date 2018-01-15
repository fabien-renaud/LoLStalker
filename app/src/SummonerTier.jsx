import React from 'react';

class SummonerTier extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: {
        id: this.props.summonerId
      },
      isLoaded: false
    }
  }

  componentDidMount() {
    let summoner = this.state.summoner;
    fetch('/api/summoner/league/' + summoner.id)
      .then(res => res.json())
      .then((result) => {
        if(result) {
          result.forEach((res) => {
            if(res.queueType === "RANKED_SOLO_5x5") {
              summoner.solo = res;
              summoner.solo.winRate = Math.floor((summoner.solo.wins / (summoner.solo.wins + summoner.solo.losses))*100);
            } else if (res.queueType === "RANKED_FLEX_SR") {
              summoner.flex = res;
              summoner.flex.winRate = Math.floor((summoner.flex.wins / (summoner.flex.wins + summoner.flex.losses))*100);
            } else {
              summoner.flex_tt = res;
              summoner.flex_tt.winRate = Math.floor((summoner.flex_tt.wins / (summoner.flex_tt.wins + summoner.flex_tt.losses))*100);
            }
          })
          this.setState({
            summoner: summoner,
            isLoaded: true
          });
        }
      })
  }

  render() {
    const { summoner, isLoaded } = this.state;

    function Badge(props) {
      return (
        <div className="summoner-tier-badge">
          <img src={require('./images/' + props.tier + '.png')}></img>
        </div>
      )
    }

    function Unranked(props) {
      return (
        <div className="summoner-tier-line">
          <Badge tier="UNRANKED" />
          <div className="summoner-tier-detail">
            <h3>Unranked</h3>
            <h4>{props.queueType}</h4>
          </div>
        </div>
      )
    }

    function Solo() {
      if(summoner.solo) {
        return (
          <div className="summoner-tier-line">
            <Badge tier={summoner.solo.tier} />
            <div className="summoner-tier-detail">
              <h3>{summoner.solo.tier} {summoner.solo.rank}</h3>
              <h4>Solo 5v5 Rank</h4>
              <p>{summoner.solo.wins}W / {summoner.solo.losses}D ({summoner.solo.winRate}%)</p>
              <p>{summoner.solo.leaguePoints}LP</p>
            </div>
          </div>
        )
      } else {
        return (
          <Unranked queueType="Solo 5v5 Rank" />
        );
      }
    }

    function Flex() {
      if(summoner.flex) {
        return (
          <div className="summoner-tier-line">
            <Badge tier={summoner.flex.tier} />
            <div className="summoner-tier-detail">
              <h3>{summoner.flex.tier} {summoner.flex.rank}</h3>
              <h4>Flex 5v5 Rank</h4>
              <p>{summoner.flex.wins}W / {summoner.flex.losses}D ({summoner.flex.winRate}%)</p>
              <p>{summoner.flex.leaguePoints}LP</p>
            </div>
          </div>
        )
      } else {
        return (
          <Unranked queueType="Flex 5v5 Rank" />
        );
      }
    }

    function FlexTT() {
      if(summoner.flex_tt) {
        return (
          <div className="summoner-tier-line">
            <Badge tier={summoner.flex_tt.tier} />
            <div className="summoner-tier-detail">
              <h3>{summoner.flex_tt.tier} {summoner.flex_tt.rank}</h3>
              <h4>Flex 3v3 Rank</h4>
              <p>{summoner.flex_tt.wins}W / {summoner.flex_tt.losses}D ({summoner.flex_tt.winRate}%)</p>
              <p>{summoner.flex_tt.leaguePoints}LP</p>
            </div>
          </div>
        )
      } else {
        return (
          <Unranked queueType="Flex 3v3 Rank" />
        );
      }
    }

    return (
      <div className="summoner-tier">
        <h2 className="summoner-tier-title">Summoner Rank</h2>
        <Solo />
        <Flex />
        <FlexTT />
      </div>
    )
  }
}

export default SummonerTier;
