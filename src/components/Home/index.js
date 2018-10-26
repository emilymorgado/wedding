import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import Navbar from 'components/Navbar';
import llamas from 'components/Home/llamas.png';
import './index.css';

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar />
          <h1>Emily and Alexei</h1>
          <h2>13 April 2019</h2>
          <Container>
            <img
              className="img-responsive"
              alt={'Us looking good!'}
              src={llamas}
            />
            <span>The beautiful couple!</span>
        </Container>
      </div>
    )
  }
}

export default Home;
