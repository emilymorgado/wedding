import React from 'react';
import { useState, useEffect } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from 'components/Home';
import Info from 'components/Info';
import Gifts from 'components/Gifts';
import QandA from 'components/QandA';
import Accommodation from 'components/Accommodation';
import Button from 'components/reusable/Button';

const Navbar = () => {
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
    // const signinBtn = css`
    //   height: 60px;
    //   width: 160px;
    //   float: right;
    //   margin-right: 2%;
    //   margin-top: .3%;
    //   font-size: 1em;
    //   font-family: 'Mali', cursive;
    //   background-color: #747474;
    //   border: 2px solid #272727;
    //   border-radius: 10px;
    // `
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
    displayComponent = <Home />  //TODO: ErrorPage
  }

    return (
      <div>
        <div css={container}>
          <FontAwesomeIcon className='heart-icon' icon='dragon' size='4x' />
            <button
              css={navBtn}
              onClick={() => setIsActive('home')}>
              <FontAwesomeIcon className='heart-icon' icon='heart' size='1x' />
              HOME
            </button>
            <button
              css={navBtn}
              onClick={() => setIsActive('wedding info')}>
              <FontAwesomeIcon className='heart-icon' icon='cat' size='2x' />
              WEDDING INFO
            </button>
            <button
              css={navBtn}
              onClick={() => setIsActive('gifts')}>
              <FontAwesomeIcon className='heart-icon' icon='gift' size='2x' />
              GIFTS
            </button>
            <button
              css={navBtn}
              onClick={() => setIsActive('q and a')}>
              <FontAwesomeIcon className='heart-icon' icon='hippo' size='2x' />
              QUESTIONS/ANSWERS
            </button>
            <button
              css={navBtn}
              onClick={() => setIsActive('accomodation and tourism')}>
              <FontAwesomeIcon className='heart-icon' icon='home' size='2x' />
              ACCOMMODATION/TOURISM
            </button>
          <Button text='SIGN IN' type='signinBtn' />
        </div>
        {displayComponent}
      </div>
    )
}

export default Navbar;

// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
