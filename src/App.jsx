import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from "material-ui/Button";
import NavBar from "./components/NavBar";
import LeagueTable from "./components/LeagueTable/leagueTable";
import './App.css';


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
