import {combineReducers} from 'redux';
import trip from './TripReducer';

const reducers = combineReducers({
  trip,
  // more reducers
});

export default reducers;
