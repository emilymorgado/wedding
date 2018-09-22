import React, { Component } from 'react';
import llamas from './llamas.png';

class Homepage extends Component {

  render() {
    return (
      <div>
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

export default Homepage;
