import { combineReducers } from 'redux';
import OptionReducer from './option_reducer';
import TextureReducer from './texture_reducer';

const RootReducer = combineReducers({
  options: OptionReducer,
  texture: TextureReducer
});

export default RootReducer;
