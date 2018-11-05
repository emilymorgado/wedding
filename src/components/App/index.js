import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHeart,
  faGift,
  faHome,
  faCat,
  faHippo,
  faDragon,
  } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import Navbar from 'components/Navbar';

class App extends Component {
  render() {
    library.add(faHeart, faGift, faHome, faCat, faHippo, faDragon)
    return (
      <Navbar />
    );
  }
};

export default App;
