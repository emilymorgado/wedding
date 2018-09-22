import React from 'react';
import { shallow } from 'enzyme';

import Homepage from '../Homepage';

let homepage;

beforeEach(() => {
  homepage = shallow(<Homepage />);
});

it('shows an image', () => {
  expect(homepage.find('img').length).toEqual(1);
});

it('shows a header', () => {
  expect(homepage.find('h1').length).toEqual(1);
});

it('shows a subheader', () => {
  expect(homepage.find('h2').length).toEqual(1);
});

it('shows a navbar', () => {
  //this isn't built yet
  // expect(homepage.find(Navbar).length).toEqual(1);
});
