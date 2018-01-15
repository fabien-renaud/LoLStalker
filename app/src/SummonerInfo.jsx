import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const championIcon = championId => 'http://ddragon.leagueoflegends.com/cdn/8.1.1/img/champion/' + championId + '.png';

class SummonerInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      summoner: this.props.summoner,
      chartData: {},
      chartOptions: {}
    }
  }

  componentDidMount () {
    this.getChartData ();
  }

  getChartData () {
    this.setState({
      chartData: {
        labels: ['Wins', 'Loosses'],
        datasets: [{
          data: [10, 20],
          backgroundColor: ['#75b959', '#fff']
        }],
      },
      chartOptions: {
        cutoutPercentage: 80,
        segmentShowStroke: false,
        legend: {display: false},
        elements: {
          arc: {borderWidth: 0},
          center: {
            text: '33%'
          }
        }
      }
    });
  }

  render() {
    const { summoner, chartData, chartOptions } = this.state;

    function RecentChamp() {
      return(
        <div className="summoner-info-recent-champion">
          <img src={championIcon("Tristana")} className="champion-icon"></img>
          <div className="champion-info">
            <h5>Jinx</h5>
            <p>66 Cs</p>
          </div>
          <div className="champion-kda">
            <h5>3,24 KDA</h5>
            <p>7.1 / 5.0 / 9.1</p>
          </div>
          <div className="champion-played">
            <p>50%</p>
            <p>14 played</p>
          </div>
        </div>
      );
    }

    console.log(summoner);
    return (
      <div className="summoner-info">
        <div className="summoner-info-general">
          <div className="summoner-winrate">
            <p>Winrate</p>
            <Doughnut
              data={chartData}
              options={chartOptions}
              width={140}
              height={140}/>
          </div>
          <p className="summoner-info-role">Main role: ADC</p>
        </div>

        <div className="summoner-info-stats">
        </div>

        <div className="summoner-info-recent-champion-list">
          <RecentChamp />
          <RecentChamp />
          <RecentChamp />
        </div>
      </div>
  )}
}

export default SummonerInfo;
