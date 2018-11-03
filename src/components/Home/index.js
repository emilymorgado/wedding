import React, { Component } from 'react';
import llamas from 'components/Home/llamas.png';

// Includes date, schedule, venue, park info, family party, maps, travel tips

class Home extends Component {

  render() {
    return (
      <div>
        {/* <h1>Emily and Alexei</h1> */}
        <h1>There is a wedding. This is a wedding. We're getting married. SURPRISE!</h1>
        <h2>13 April 2019</h2>
        <div className='main-container'>
            <img
              className="img-responsive"
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
