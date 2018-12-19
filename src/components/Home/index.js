import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import llamas from 'components/Home/llamas.png';

// TODO: Start time h3
class Home extends Component {

  render() {
    return (
      <div>
        <h1>
          <FontAwesomeIcon className='heart-icon' icon='heart' size='1x' />
          Emily and Alexei
          <FontAwesomeIcon className='heart-icon' icon='heart' size='1x' />
        </h1>
        <h2>13 April 2019</h2>
        <div className='main-container'>
            <img
              alt={'Us looking good!'}
              src={llamas}
            />
            <p>"The beautiful couple!" -Unknown</p>
            <button className='rsvp-button'>RSVP</button>
        </div>
      </div>
    )
  }
}

export default Home;

// colors  - psychadelic
// #C34271  berry
// #F070A1  pink
// #16FFBD  light green
// #12C988  med green
// #439F76  dark green

// colors  - basic
// #14A76C  green
// #FFE400  yellow
// #FF652F  orange
// #747474  grey
// #272727  black

// colors  - trendy
// #A64AC9  purple
// #FCCD04  yellow
// #FFB48F  peach
// #F5E6CC  beige
// #17E9E0  teal

// other nice palettes:
//31,
