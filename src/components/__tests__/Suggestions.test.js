import React from 'react';
import { shallow } from 'enzyme';

import Suggestions from '../Suggestions';

let suggestions;

beforeEach(() => {
  suggestions = shallow(<Suggestions />);
});

it('has a textarea and button', () => {
  expect(suggestions.find('textarea').length).toEqual(1);
  expect(suggestions.find('h4').length).toEqual(1);
});

it('shows a header', () => {
  expect(suggestions.find('h4').length).toEqual(1);
});

it('has a text area that users can type in', () => {
  suggestions.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });
});
