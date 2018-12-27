import { GET_QUESTIONS_AND_ANSWERS } from 'store/actions/types';

export default function(state=[], action) {
  switch (action.type) {
    case GET_QUESTIONS_AND_ANSWERS:
      return [...state, action.payload];
    default:
      return state;
  }
}
