import { addSuggestion } from 'store/actions';
import { ADD_SUGGESTION } from 'store/actions/types';

describe('addSuggestion', () => {
  it('has the correct type', () => {
    const action = addSuggestion();
    expect(action.type).toEqual(ADD_SUGGESTION);
  });

  it('has the correct payload', () => {
    const action = addSuggestion('New Suggestion');
    expect(action.payload).toEqual('New Suggestion');
  });
});
