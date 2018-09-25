import { ADD_SUGGESTION } from 'store/actions/types';

export function addSuggestion(suggestion) {
  return {
    type: ADD_SUGGESTION,
    payload: suggestion,
  };
}
