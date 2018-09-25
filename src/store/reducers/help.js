import { SAVE_OFFER } from 'store/actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case SAVE_OFFER:
      return [...state, action.payload];
    default:
      return state;
  }
}
