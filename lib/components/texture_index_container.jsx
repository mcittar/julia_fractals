import TextureIndex from './texture_index.jsx';
import { connect } from 'react-redux';
import { sendTexture } from '../actions/texture_actions.js';

const mapStateToProps = state => ({
    texture: state.texture
});

const mapDispatchToProps = dispatch => ({
  sendTexture: (texture) => dispatch(sendTexture(texture))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextureIndex);
