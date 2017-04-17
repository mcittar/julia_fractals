export const RECEIVE_TEXTURES = 'RECEIVE_TEXTURES';

export const sendTexture = texture => (dispatch) => {
	dispatch(receiveTexture(texture));
};

export const receiveTexture = texture => {

	return ({
		type: RECEIVE_TEXTURES,
		texture
	});
};
