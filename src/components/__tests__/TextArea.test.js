import React from 'react';
import { mount } from 'enzyme';

import TextArea from 'components/TextArea';
import Root from 'Root';

let textArea;

beforeEach(() => {
  textArea = mount(
    <Root>
      <TextArea />
    </Root>
  );
});

afterEach(() => {
  textArea.unmount();
});

it('has a text area and a button', () => {
  expect(textArea.find('textarea').length).toEqual(1);
  expect(textArea.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    textArea.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
    textArea.update();
  });

  it('has a text area that users can type in', () => {
    expect(textArea.find('textarea').prop('value')).toEqual('new comment');
  });

  it('when form is submitted, text area gets emptied', () => {
    textArea.find('form').simulate('submit');
    textArea.update();
    expect(textArea.find('textarea').prop('value')).toEqual('');
  });
});
