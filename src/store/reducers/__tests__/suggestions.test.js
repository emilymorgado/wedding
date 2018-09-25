import suggestionsReducer from 'store/reducers/suggestions';
import { SAVE_SUGGESTION } from 'store/actions/types';

it('handles actions of type ADD_SUGGESTION', () => {
  const action = {
    type: SAVE_SUGGESTION,
    payload: 'New Suggestion',
  };

  const newState = suggestionsReducer([], action);
  expect(newState).toEqual(['New Suggestion']);
});

it('handles action with unknown type', () => {
  const newState = suggestionsReducer([], {});
  expect(newState).toEqual([]);
});
