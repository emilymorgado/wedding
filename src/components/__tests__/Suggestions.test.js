import React from 'react';
import { shallow } from 'enzyme';

import Suggestions from '../Suggestions';

let suggestions;

beforeEach(() => {
  suggestions = shallow(<Suggestions />);
});

it('shows a header', () => {
  expect(suggestions.find('h1').length).toEqual(1);
});
