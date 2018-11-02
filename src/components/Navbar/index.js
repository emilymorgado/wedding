import React from 'react';
import { useState } from 'react';
import Home from 'components/Home';
import MoreInfo from 'components/MoreInfo';
import Accommodation from 'components/Accommodation';
import Gifts from 'components/Gifts';
import './index.css';

const Navbar = () => {
  const [isActive, setIsActive] = useState('home');

  // useEffect(() => {
  //   document.title = isActive
  // });

  let displayComponent = <Home />

  if (isActive === 'home') {
    displayComponent = <Home />
  } else if (isActive === 'more info') {
    displayComponent = <MoreInfo />
  } else if (isActive === 'accomodation') {
    displayComponent = <Accommodation />
  } else if (isActive === 'rsvp') {
    displayComponent = <Home /> //<RSVP />
  } else if (isActive === 'gifts') {
    displayComponent = <Gifts />
  } else {
    displayComponent = <Home />  //ErrorPage
  }

    return (
      <div>
        <div fixed='top' >
          <button type='button' name='logo'>(Our logo goes here) Emily&Alexei> </button>
            <button type='button' onClick={() => setIsActive('home')}>Home</button>
            <button type='button' onClick={() => setIsActive('more info')}>More Info</button>
            <button type='button' onClick={() => setIsActive('accomodation')}>Accommodation and Tourism</button>
            <button type='button' onClick={() => setIsActive('gifts')}>Gifts</button>
            <button type='button' onClick={() => setIsActive('rsvp')}>RSVP</button>
          <button type='button' size='small' color='green'>Sign in</button>
        </div>
        {displayComponent}
      </div>
    )
}

export default Navbar;

// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
