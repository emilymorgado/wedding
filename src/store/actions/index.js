import axiosInstance from 'axiosQuestions';

import {
  SAVE_QUESTION,
} from 'store/actions/types';

//pass in query parameters
//can curry to dispatch
// can be:
// const query = ''
// const url = 'api + query'
// return axios.get(url, {headers}).then(data => {dispatch({type:SAVE_QUESTION,payload:data})})
export const saveQuestion = () => {
  axiosInstance.get('/questions.json')
    .then(res => {
      const docs = [];

      for (let key in res.data) {
        let enter = { id: key, question: res.data[key].question, answer: res.data[key].answer}
        docs.push(enter);
      }
      return docs;
    })
    .catch(err => {
      return err;
    });

  return {
    type: SAVE_QUESTION,
    payload: docs,
  };
}



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
//
// export function saveOffer(offer) {
//   return {
//     type: SAVE_OFFER,
//     payload: offer,
//   };
// }
