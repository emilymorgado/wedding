import { ADD_SUGGESTION } from './types';

export function addSuggestion(suggestion) {
  return {
    type: ADD_SUGGESTION,
    payload: suggestion,
  };
}
