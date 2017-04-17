export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';

export const sendOptions = options => (dispatch) => {
	dispatch(receiveOptions(options));
};

export const receiveOptions =  options => {
	console.log(`receiving ${ options }`);
	return ({
		type: RECEIVE_OPTIONS,
		options
	});
};
