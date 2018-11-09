import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" />
        <Feed className="App-feed" />
      </div>
    );
  }
}

export default App;
