import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div>
        <Link to='/'><button>Home</button></Link>
        <Link to='/suggestions'><button>Make a Suggestion</button></Link>
        <Link to='/offerhelp'><button>Offer to Help</button></Link>
      </div>
    )
  }
}

export default Navbar;
