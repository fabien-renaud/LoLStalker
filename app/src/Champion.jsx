import React from 'react';

class Summoner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      champions: [],
    }
  }

  // componentDidMount() {
  //   fetch('/api/champion/championList')
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         console.log(result);
  //         this.setState({
  //           isLoaded: true,
  //           champions: result.data,
  //         });
  //       },
  //       (error) => {
  //         this.setState({
  //           isLoaded: true,
  //           error
  //         });
  //       }
  //     )
  // }

  render() {
    const { error, isLoaded, champions } = this.state;
    if(error) {
      return (
        <div className="container">
          <h1>Error</h1>
          <p>{error.message}</p>
        </div>
      )
    } else if (!isLoaded) {
      return (<div className="container">Loading...</div>)
    } else {
      return (
        <div className="container">
          {/* <ul>
            {champions.map(champion => (
              <li key={champion.id}>
                {champion.name}
              </li>
            ))}
          </ul> */}
        </div>
      );
    }
  }
}

export default Summoner;
