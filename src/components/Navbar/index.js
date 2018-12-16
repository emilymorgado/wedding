import React from 'react';
import { useState, useEffect } from 'react';
import { css } from 'emotion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from 'components/Home';
import Info from 'components/Info';
import Gifts from 'components/Gifts';
import QandA from 'components/Help';
import Accommodation from 'components/Accommodation';

const Navbar = () => {
  const [isActive, setIsActive] = useState('home');

  useEffect(() => {
    document.title = isActive
  });

  let displayComponent = <Home />

  if (isActive === 'home') {
    displayComponent = <Home />
  } else if (isActive === 'wedding info') {
    displayComponent = <Info />
  } else if (isActive === 'accomodation and tourism') {
    displayComponent = <Accommodation />
  } else if (isActive === 'q and a') {
    displayComponent = <QandA />
  } else if (isActive === 'gifts') {
    displayComponent = <Gifts />
  } else {
    displayComponent = <Home />  //ErrorPage
  }

  // STYLES
  const container = css`
    background-color: #F070A1;
    border: 1px solid #C34271;
  `
  const navBtn = css`
    height: 100px;
    width: 200px;
    font-size: 1em;
    font-family: 'Mali', cursive;
    border: none;
    background-color: #F070A1;
  `
    const navActive = css`
      height: 100px;
      width: 500px;
      font-size: 2em;
      font-family: 'Mali', cursive;
      border: none;
      background-color: #C34271;
    `
    const signinBtn = css`
      height: 60px;
      width: 160px;
      float: right;
      margin-right: 2%;
      margin-top: .3%;
      font-size: 1em;
      font-family: 'Mali', cursive;
      background-color: #747474;
      border: 2px solid #272727;
      border-radius: 10px;
    `

    return (
      <div>
        <div className={container}>
          <FontAwesomeIcon className='heart-icon' icon='dragon' size='4x' />
            <button
              className={navBtn}
              onClick={() => setIsActive('home')}>
              <FontAwesomeIcon className='heart-icon' icon='heart' size='1x' />
              HOME
            </button>
            <button
              className={navBtn}
              onClick={() => setIsActive('wedding info')}>
              <FontAwesomeIcon className='heart-icon' icon='cat' size='2x' />
              WEDDING INFO
            </button>
            <button
              className={navBtn}
              onClick={() => setIsActive('gifts')}>
              <FontAwesomeIcon className='heart-icon' icon='gift' size='2x' />
              GIFTS
            </button>
            <button
              className={navBtn}
              onClick={() => setIsActive('q and a')}>
              <FontAwesomeIcon className='heart-icon' icon='hippo' size='2x' />
              QUESTIONS/ANSWERS
            </button>
            <button
              className={navBtn}
              onClick={() => setIsActive('accomodation and tourism')}>
              <FontAwesomeIcon className='heart-icon' icon='home' size='2x' />
              ACCOMMODATION/TOURISM
            </button>
          <button className={signinBtn}>SIGN IN</button>
        </div>
        {displayComponent}
      </div>
    )
}

export default Navbar;

// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
