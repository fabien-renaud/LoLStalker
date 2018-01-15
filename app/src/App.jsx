import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/main.less';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Home from './Home.jsx';
import Champion from './Champion.jsx';
import Summoner from './Summoner.jsx';

render(
  <Router>
    <div id="main">
    <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/summoner" component={Home}/>
        <Route path="/champion" component={Champion}/>
        <Route path="/summoner" component={Summoner}/>
        <Route path="/items" component={Home}/>
        <Route path="/generator" component={Home}/>
      </Switch>
    {/* <Footer /> */}
    </div>
  </Router>,
  document.getElementById("root")
);
