import { combineReducers } from 'redux';
import { coronaReducer } from './reducer/coronaReducer';

const rootReducer = combineReducers({
  corona: coronaReducer
});

export default rootReducer;