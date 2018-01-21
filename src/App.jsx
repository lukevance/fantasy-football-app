import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from "material-ui/Button";
import NavBar from "./NavBar";
import LeagueTable from "./leagueTable/leagueTable";
import './App.css';
// import scoreboardReader from '.';

// console.log(scoreboardReader('286565', '7', '15'));
// const getScoreBoard = async () => {
//     let scoreboard = await scoreboardReader('286565', '7', '15');
//     console.log(scoreboard);
// };


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LeagueTable 
            style={{
                padding: "20px"
            }}
        />
      </div>
    );
  }
}

export default App;
