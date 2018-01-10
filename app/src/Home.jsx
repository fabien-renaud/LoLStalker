import React from 'react';
import './styles/home.less';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="home">
        <h1>LEAGUE STALKER</h1>
        <form className="input-summoner">
          <input type="text" id="input-summoner" name="input-summoner" className="input-summoner-input" placeholder="Start to stalk..." autoFocus></input>
          <div className="input-summoner-append">
            <button type="button" className="input-summoner-btn-region">EUW</button>
            <button type="button" className="input-summoner-btn-submit">S</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
