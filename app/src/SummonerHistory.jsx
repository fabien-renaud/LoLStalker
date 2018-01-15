import React from 'react';

class SummonerHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: this.props.summoner
    }
  }

  render() {
    const { summoner } = this.state;
    return (
      <div className="summoner-history">
      </div>
  )}
}

export default SummonerHistory;
