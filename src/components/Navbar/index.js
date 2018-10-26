import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'semantic-ui-react';
import './index.css';

class Navbar extends Component {
  state = { activeItem: 'home' };
  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    // Travel and Accommodation
    // Tourism
    // Schedule (wedding and park day)
    // 'Details'
    // RSVP
    // Q&A
    //

    return (
      <Menu tabular fixed='top' >
        <Menu.Item name='logo'>(Our logo goes here) Emily&Alexei</Menu.Item>
        <Link to='/'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/suggestions'>
          <Menu.Item name='suggestions' active={activeItem === 'success'} onClick={this.handleItemClick} />
        </Link>
        <Link to='/offerhelp'>
          <Menu.Item name='Offer to Help' active={activeItem === 'offerhelp'} onClick={this.handleItemClick} />
        </Link>

        <Link to='/venue'>
          <Menu.Item name='venue' active={activeItem === 'venue'} onClick={this.handleItemClick}>Venue</Menu.Item>
        </Link>

        <Button size='small' color='green'>Click Here</Button>
      </Menu>
    )
  }
}

export default Navbar;
