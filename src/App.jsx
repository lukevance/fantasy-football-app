import React, { Component } from 'react';
// import logo from './logo.svg';
import Button from "material-ui/Button";
import NavBar from "./components/Navigation/NavBar";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
      </div>
    );
  }
}

export default App;
