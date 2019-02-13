import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import llamas from 'components/Home/llamas.png';
import Button from 'components/reusable/Button';

const Home = () => {
  return (
    <div>
      <h1>
        <FontAwesomeIcon className="heart-icon" icon="heart" size="1x" />
        Samantha and James
        <FontAwesomeIcon className="heart-icon" icon="heart" size="1x" />
      </h1>
      <h2>13 April 2019</h2>
      <h3>at 16:30</h3>
      <div className="main-container">
        <img
          alt={'Us looking good!'}
          src={llamas}
        />
        <p>"The beautiful couple!" -Unknown</p>
        <Button text="RSVP" type="bigButton" />
      </div>
    </div>
  )
}

export default Home;

// colors
// #C34271  berry
// #F070A1  pink
// #16FFBD  light green
// #12C988  med green
// #439F76  dark green
