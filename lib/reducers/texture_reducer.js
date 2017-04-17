import { RECEIVE_TEXTURE } from '../actions/option_actions';

const TextureReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TEXTURE:
      return action.texture;
    default:
      return state;
  }
};

export default TextureReducer;
