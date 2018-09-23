import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../Navbar';

let navbar;

beforeEach(() => {
  navbar = shallow(<Navbar />);
});

it('shows a button', () => {
  expect(navbar.find('button').length).toEqual(1);
});

it('shows a text in the button', () => {
  expect(navbar.find('h1').length).toEqual(1);
});
