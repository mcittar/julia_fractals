export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';

export const sendOptions = options => (dispatch) => {
	dispatch(receiveOptions(options));
};

export const receiveOptions =  options => {

	return ({
		type: RECEIVE_OPTIONS,
		options
	});
};
