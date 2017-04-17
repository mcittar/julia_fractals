import Canvas from './canvas.jsx';
import { connect } from 'react-redux';
import { sendOptions } from '../actions/option_actions.js';
import { sendTexture } from '../actions/texture_actions.js';

const mapStateToProps = state => ({
    options: state.options,
    texture: state.texture
});

const mapDispatchToProps = dispatch => ({
  sendOptions: (options) => dispatch(sendOptions(options)),
  sendTexture: (texture) => dispatch(sendTexture(texture))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
