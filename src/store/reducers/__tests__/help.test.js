import helpReducer from 'store/reducers/help';
import { SAVE_OFFER } from 'store/actions/types';

it('handles actions of type ADD_HELP', () => {
  const action = {
    type: SAVE_OFFER,
    payload: 'Help Offer',
  };

  const newState = helpReducer([], action);
  expect(newState).toEqual(['Help Offer']);
});

it('handles action with unknown type', () => {
  const newState = helpReducer([], {});
  expect(newState).toEqual([]);
});
