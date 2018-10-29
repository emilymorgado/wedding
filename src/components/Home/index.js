import React, { Component } from 'react';
import Navbar from 'components/Navbar';
import llamas from 'components/Home/llamas.png';
import './index.css';

// Includes date, schedule, venue, park info, family party, maps, travel tips

class Home extends Component {

  render() {
    return (
      <div>
        <h1>Emily and Alexei</h1>
        <h2>13 April 2019</h2>
        <div>
            <img
              className="img-responsive"
              alt={'Us looking good!'}
              src={llamas}
            />
            <span>The beautiful couple!</span>
        </div>
      </div>
    )
  }
}

export default Home;
