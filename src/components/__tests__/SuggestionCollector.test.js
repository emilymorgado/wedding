import React from 'react';
import { shallow } from 'enzyme';

import SuggestionCollector from '../SuggestionCollector';

let suggestions;

beforeEach(() => {
  suggestions = shallow(<SuggestionCollector />);
});

it('shows a header', () => {
  expect(suggestions.find('h1').length).toEqual(1);
});

it('has a TextArea component', () => {

});
