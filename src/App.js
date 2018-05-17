import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Notes from './component/notes'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Notes/>
      </div>
    );
  }
}

export default App;
