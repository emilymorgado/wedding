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
    width: 100%;
  `
  const navBtn = css`
    height: 100px;
    width: 20%;
    font-size: 1em;
    font-family: 'Mali', cursive;
    border: none;
    background-color: #F070A1;
    @media (max-width: 736px) {
      height: 60px;
      width: 20%;
    }
  `
    const navActive = css`
      height: 100px;
      width: 500px;
      font-size: 2em;
      font-family: 'Mali', cursive;
      border: none;
      background-color: #C34271;
    `

  const [isActive, setIsActive] = useState('home');

  useEffect(() => {
    document.title = isActive
  });

  let displayComponent = <Home />

  if (isActive === 'home') {
    displayComponent = <Home />
  } else if (isActive === 'info') {
    displayComponent = <Info />
  } else if (isActive === 'sleep') {
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
        <button
          css={navBtn}
          onClick={() => setIsActive('home')}>
          <FontAwesomeIcon className='heart-icon' icon='heart' size='2x' />
          HOME
        </button>
        <button
          css={navBtn}
          onClick={() => setIsActive('info')}>
          <FontAwesomeIcon className='heart-icon' icon='cat' size='2x' />
          INFO
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
          Q/A
        </button>
        <button
          css={navBtn}
          onClick={() => setIsActive('sleep')}>
          <FontAwesomeIcon className='heart-icon' icon='home' size='2x' />
          SLEEP
        </button>
      </div>
      {displayComponent}
    </div>
  )
}

export default Navbar;

// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
// <FontAwesomeIcon className='heart-icon' icon='dragon' size='4x' />
// <Button text='SIGN IN' type='signinBtn' />
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
