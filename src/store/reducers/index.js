import { combineReducers } from 'redux';
import suggestionsReducer from 'store/reducers/suggestions';

export default combineReducers({
  suggestions: suggestionsReducer
});
