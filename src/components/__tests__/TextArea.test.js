import React from 'react';
import { shallow } from 'enzyme';
import TextArea from '../TextArea';

let textarea;

beforeEach(() => {
  textarea = shallow(<TextArea />);
});

afterEach(() => {
  textarea.unmount();
});

it('has a text area and a button', () => {
  expect(textarea.find('textarea').length).toEqual(1);
  expect(textarea.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    textarea.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    textarea.update();
  });

  it('has a text area that users can type in', () => {
    expect(textarea.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    textarea.find('button').simulate('submit');
    textarea.update();
    expect(textarea.find('textarea').text()).toEqual('');
  });
});
