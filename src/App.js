import React, { Component } from 'react';
import Homepage from './components/Homepage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Yo, Emily. It's Wedding time */}
        <Homepage />
      </div>
    );
  }
}

export default App;
