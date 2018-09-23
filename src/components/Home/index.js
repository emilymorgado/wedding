import React, { Component } from 'react';

import Navbar from '../../components/Navbar'; // This can be improved with react router?
import llamas from './llamas.png';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h1>Emily and Alexei at it at last!</h1>
        <h2>27 June 2019</h2>
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
