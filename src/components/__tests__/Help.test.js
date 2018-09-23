import React from 'react';
import { shallow } from 'enzyme';

import Help from '../Help';

let help;

beforeEach(() => {
  help = shallow(<Help />);
});

it('shows a header', () => {
  expect(help.find('h1').length).toEqual(1);
});
