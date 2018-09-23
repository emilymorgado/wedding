import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';
import Navbar from '../Navbar';

let home;

beforeEach(() => {
  home = shallow(<Home />);
});

it('shows an image', () => {
  expect(home.find('img').length).toEqual(1);
});

it('shows a header', () => {
  expect(home.find('h1').length).toEqual(1);
});

it('shows a subheader', () => {
  expect(home.find('h2').length).toEqual(1);
});

it('shows a navbar', () => {
  expect(home.find(Navbar).length).toEqual(1);
});
