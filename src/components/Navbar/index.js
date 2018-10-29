import React from 'react';
import { useState, useEffect } from 'react';
import Home from 'components/Home';
import MoreInfo from 'components/MoreInfo';
import './index.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState('home');
  // const [mainComponent, setMainComponent] = useState(isActive);

  let mainComponent = <Home />;
  useEffect(() => {
    console.log('useEffect', isActive)
    document.title = isActive
    // switch (isActive) {
    //   case 'home':
    //     mainComponent = <Home />
    //   case 'more info':
    //     mainComponent = <MoreInfo />
    //   default:
    //     mainComponent = <Home />
    // }
  });


    return (
      <div>
        <div fixed='top' >
          <button type='button' name='logo'>(Our logo goes here) Emily&Alexei> </button>
            <button type='button' onClick={() => setIsActive('home')}>Home</button>
            <button type='button' onClick={() => setIsActive('more info')}>More Info</button>
            <button type='button' onClick={() => setIsActive('accomodation')}>Accommodation and Tourism</button>
            <button type='button' onClick={() => setIsActive('rsvp')}>RSVP</button>
          <button type='button' size='small' color='green'>Sign in</button>
        </div>
        {mainComponent}
      </div>
    )
}

export default Navbar;

// Accommodation
// Includes airbnb suggestions, tourisms tips, airport info, general getting around the bay info
// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
