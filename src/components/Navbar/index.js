import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

  render() {
    return (
      <div>
        <h1>Navbar!!!</h1>
        <Link to='/'><button>Home</button></Link>
        <Link to='/suggestions'><button>Make a Suggestion</button></Link>
        <button>Offer to help</button>
      </div>
    )
  }
}

export default Navbar;
