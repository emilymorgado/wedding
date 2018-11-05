import React from 'react';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from 'components/Home';
import Info from 'components/Info';
import Gifts from 'components/Gifts';
import Help from 'components/Help';
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
  } else if (isActive === 'help and suggestions') {
    displayComponent = <Help />
  } else if (isActive === 'gifts') {
    displayComponent = <Gifts />
  } else {
    displayComponent = <Home />  //ErrorPage
  }

    return (
      <div>
        <div className='nav-container'>
          <FontAwesomeIcon className='heart-icon' icon='dragon' size='5x' />
            <button
              className='nav-button'
              onClick={() => setIsActive('home')}>
              <FontAwesomeIcon className='heart-icon' icon='heart' size='2x' />
              HOME
            </button>
            <button
              className='nav-button'
              onClick={() => setIsActive('wedding info')}>
              <FontAwesomeIcon className='heart-icon' icon='cat' size='2x' />
              WEDDING INFO
            </button>
            <button
              className='nav-button'
              onClick={() => setIsActive('gifts')}>
              <FontAwesomeIcon className='heart-icon' icon='gift' size='2x' />
              GIFTS
            </button>
            <button
              className='nav-button'
              onClick={() => setIsActive('help and suggestions')}>
              <FontAwesomeIcon className='heart-icon' icon='hippo' size='2x' />
              HELP/SUGGESTIONS
            </button>
            <button
              className='nav-button'
              onClick={() => setIsActive('accomodation and tourism')}>
              <FontAwesomeIcon className='heart-icon' icon='home' size='2x' />
              ACCOMMODATION/TOURISM
            </button>
          <button className='signin-button'>SIGN IN</button>
        </div>
        {displayComponent}
      </div>
    )
}

export default Navbar;

// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
