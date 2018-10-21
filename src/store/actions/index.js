import axios from 'axios';

import {
  SAVE_SUGGESTION_SUCCESS,
  SAVE_SUGGESTION_FAILURE,
  SAVE_SUGGESTION_STARTED,
  SAVE_OFFER,
} from 'store/actions/types';

// export function saveSuggestion(suggestion) {
//   return {
//     type: SAVE_SUGGESTION,
//     payload: suggestion,
//   };
// }



// export const saveSuggestion = suggestion => {
//   return dispatch => {
//     dispatch(saveSuggestionStarted());
//
//     axios.post('https://jsonplaceholder.typicode.com/todos', {
//
//     })
//   }
//
//
//   axios.post('https://lovestuffwedding.firebaseio.com/suggestions.json', suggestion)
//     .then(response => {
//       console.log('response')
//       // dispatch(setIngredients(response.data));
//     })
//     .catch(error => {
//       console.log(error)
//       // dispatch(fetchIngredientsFailed());
//     });
// };

export function saveOffer(offer) {
  return {
    type: SAVE_OFFER,
    payload: offer,
  };
}
