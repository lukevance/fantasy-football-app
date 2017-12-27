import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from "material-ui/Button";
import NavBar from "./NavBar";
import ScoreTable from "./ScoreTable";
import './App.css';

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
            color="primary"
            style={{
                marginTop: "20px"
            }}
        >
            Hello World
        </Button>
      </div>
    );
  }
}

export default App;
