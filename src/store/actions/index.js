import {
  SAVE_SUGGESTION,
  SAVE_OFFER,
} from 'store/actions/types';

export function saveSuggestion(suggestion) {
  return {
    type: SAVE_SUGGESTION,
    payload: suggestion,
  };
}

export function saveOffer(offer) {
  return {
    type: SAVE_OFFER,
    payload: offer,
  };
}
