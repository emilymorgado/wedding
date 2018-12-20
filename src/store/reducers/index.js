import { combineReducers } from 'redux';
import suggestionsReducer from 'store/reducers/suggestions';
import helpReducer from 'store/reducers/help';

//SAVE_QUESTION
export default combineReducers({
  suggestions: suggestionsReducer,
  helpOffers: helpReducer,
});
