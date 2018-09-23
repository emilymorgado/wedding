import React from 'react';
import { shallow } from 'enzyme';

import Navbar from '../Navbar';

let navbar;

beforeEach(() => {
  navbar = shallow(<Navbar />);
});

it('shows 3 buttons', () => {
  expect(navbar.find('button').length).toEqual(3);
});
