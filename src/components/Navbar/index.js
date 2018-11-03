import React from 'react';
import { useState } from 'react';
import Home from 'components/Home';
import Info from 'components/Info';
import Gifts from 'components/Gifts';
import Help from 'components/Help';
import Accommodation from 'components/Accommodation';

const Navbar = () => {
  const [isActive, setIsActive] = useState('home');

  // useEffect(() => {
  //   document.title = isActive
  // });

  let displayComponent = <Home />

  if (isActive === 'home') {
    displayComponent = <Home />
  } else if (isActive === 'wedding info') {
    displayComponent = <Info />
  } else if (isActive === 'accomodation') {
    displayComponent = <Accommodation />
  } else if (isActive === 'help') {
    displayComponent = <Help /> //<HELP />
  } else if (isActive === 'gifts') {
    displayComponent = <Gifts />
  } else {
    displayComponent = <Home />  //ErrorPage
  }

    return (
      <div>
        <div className='nav-container'>
          {/* <div className='nav-logo'>(Our logo goes here) Emily&Alexei</div> */}
            <button className='nav-button' onClick={() => setIsActive('home')}>HOME</button>
            <button className='nav-button' onClick={() => setIsActive('wedding info')}>WEDDING INFO</button>
            <button className='nav-button' onClick={() => setIsActive('gifts')}>GIFTS</button>
            <button className='nav-button' onClick={() => setIsActive('help')}>HELP/SUGGESTIONS</button>
            <button className='nav-button' onClick={() => setIsActive('accomodation')}>ACCOMMODATION/TOURISM</button>
          <button className='signin-button'>SIGN IN</button>
        </div>
        {displayComponent}
      </div>
    )
}

export default Navbar;

// RSVP
// Forces login, allows initial rsvp and rsvp updates for wedding, family party, park
