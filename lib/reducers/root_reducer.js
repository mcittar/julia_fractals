import { combineReducers } from 'redux';
import OptionReducer from './option_reducer';

const RootReducer = combineReducers({
  options: OptionReducer
});

export default RootReducer;
