import React from 'react';

class SummonerPlayOften extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: this.props.summoner
    }
  }

  render() {
    const { summoner } = this.state;
    return (
      <div className="summoner-play-often">
        Only Sona
      </div>
  )}
}

export default SummonerPlayOften;
