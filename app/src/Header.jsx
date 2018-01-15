import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <nav>
          <ul>
            <li><Link to="/"><img src={require('./images/league_stalker_icon.svg')} /><span>League Stalker</span></Link></li>
            <li><Link to="/champion"><img src={require('./images/champion_icon.svg')} /><span>Champion</span></Link></li>
            <li><Link to="/summoner"><img src={require('./images/summoner_icon.svg')} /><span>Summoner</span></Link></li>
            <li><Link to="/items"><img src={require('./images/items_icon.svg')} /><span>Items</span></Link></li>
            <li><Link to="/generator"><img src={require('./images/generator_icon.svg')} /><span>Generator</span></Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
