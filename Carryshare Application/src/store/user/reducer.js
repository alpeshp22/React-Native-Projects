import * as types from './actionTypes'

const initialState = {
	loading: false,
	userData: null,
	user_type: null,
	galleryData: null,
	documentData:null,
};

const userReducer = (state = initialState, action) => {
	switch (action.type) {

		case types.LOGINUSER_SUCCESS:
			return {
				...state,
				userData: action.payload,
				message: action.payload.message,
			};
		case types.LOGINUSER_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.FORGOT_PASSWORD_SUCCESS:
			return {
				...state,

			};
		case types.FORGOT_PASSWORD_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.CHANGE_PASSWORD_SUCCESS:
			return {
				...state,
			};
		case types.CHANGE_PASSWORD_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.LOGOUTUSER_SUCCESS:
			return {
				...state,
				userData: null,
				user_type: null
			};
		case types.LOGOUTUSER_ERROR:
			return {
				...state,
				message: action.payload,
			};

		case types.GETPROFILE_SUCCESS:
			return {
				...state,
				userData: action.payload,
			};
		case types.GETPROFILE_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.UPDATEPROFILE_SUCCESS:
			return {
				...state,
				userData: action.payload,
			};
		case types.UPDATEPROFILEO_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.GET_GALLERY_SUCCESS:
			return {
				...state,

				galleryData: action.payload,
			};
		case types.GET_GALLERY_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.STORE_GALLERY_IMAGE_SUCCESS:
			return {
				...state,
				galleryData: action.payload,
			};
		case types.STORE_GALLERY_IMAGE_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.DELETE_GALLERY_IMAGE_SUCCESS:
			return {
				...state,
				galleryData: action.payload,
			};
		case types.DELETE_GALLERY_IMAGE_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.GET_DOCUMENT_SUCCESS:
			return {
				...state,

				documentData: action.payload,
			};
		case types.GET_DOCUMENT_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.DOCUMENT_STORE_SUCCESS:
			return {
				...state,
				documentData: action.payload,
			};
		case types.DOCUMENT_STORE_ERROR:
			return {
				...state,
				message: action.payload,
			};








		default:
			return state
	}
};

export default userReducer
