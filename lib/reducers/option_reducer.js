import RECEIVE_OPTIONS from '../actions/option_actions';

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_OPTIONS:
      return action.options;
    default:
      return state;
  }
};

export default ErrorsReducer;
