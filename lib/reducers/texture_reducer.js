import { RECEIVE_TEXTURES } from '../actions/texture_actions.js';

const TextureReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_TEXTURES:
      return action.texture;
    default:
      return state;
  }
};

export default TextureReducer;
