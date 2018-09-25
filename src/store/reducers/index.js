import { combineReducers } from 'redux';
import suggestionsReducer from 'store/reducers/suggestions';
import helpReducer from 'store/reducers/help';

export default combineReducers({
  suggestions: suggestionsReducer,
  helpOffers: helpReducer,
});
