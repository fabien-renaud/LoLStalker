import React from 'react';
import './styles/home.less';
import {Redirect} from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: "",
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({summoner: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({redirect: true});
  }

  render() {
    return (
      <div id="home">
        <h1>LEAGUE STALKER</h1>
        <form className="input-summoner" onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.summoner} onChange={this.handleChange} className="input-summoner-input" placeholder="Start to stalk..." autoFocus></input>
          <div className="input-summoner-append">
            <button type="button" className="input-summoner-btn-region">EUW</button>
            <button type="submit" className="input-summoner-btn-submit">S</button>
          </div>
        </form>

        {this.state.redirect && (
          <Redirect to={'/summoner/' + this.state.summoner} />
        )}
      </div>
    );
  }
}

export default Home;
