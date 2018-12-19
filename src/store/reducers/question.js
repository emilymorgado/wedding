import { SAVE_QUESTION } from 'store/actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case SAVE_QUESTION:
      return [...state, action.payload];
    default:
      return state;
  }
}
