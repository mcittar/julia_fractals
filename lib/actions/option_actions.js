export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';

// export const postComment = (option) => dispatch => (
//   (dispatch(receiveProject(option))
// );

export const receiveProject =  options => ({
    type: RECEIVE_OPTIONS,
    options
});
