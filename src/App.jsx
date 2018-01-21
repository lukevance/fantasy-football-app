import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from "material-ui/Button";
import NavBar from "./NavBar";
import ScoreTable from "./ScoreTable";
import './App.css';
import scoreboardReader from './scoreboardReader';

// console.log(scoreboardReader('286565', '7', '15'));
const getScoreBoard = async () => {
    let scoreboard = await scoreboardReader('286565', '7', '15');
    console.log(scoreboard);
};


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <ScoreTable 
            style={{
                padding: "20px"
            }}
        />
        <Button 
            raised 
            onClick={function(){
                getScoreBoard();
            }}
        >
            Get Data
      </Button>
      </div>
    );
  }
}

export default App;
