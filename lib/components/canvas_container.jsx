import Canvas from './canvas.jsx';
import { connect } from 'react-redux';
import { sendOptions } from '../actions/option_actions.js';

const mapStateToProps = state => ({
    options: state.options
});

const mapDispatchToProps = dispatch => ({
  sendOptions: (options) => dispatch(sendOptions(options))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Canvas);
