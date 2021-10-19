import * as types from './actionTypes';

const initialState = {
	loader: false,
	userLoader: false,
	bookingLoader: false,
	contantLoader: false,
	isInternetConnected: true,
	errorMessage: '',
	configData: null,
	translation: {},
	isTranslation: false,
	isError: false,
	currentRouteName: '',
	currentLanguage:'en',

};
const globalReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.API_LOADING_START:
			return {
				...state,
				loader: true
			};
		case types.API_LOADING_STOP:
			return {
				...state,
				loader: false
			};
		case types.USER_API_LOADING_START:
			return {
				...state,
				userLoader: true
			};
		case types.USER_API_LOADING_STOP:
			return {
				...state,
				userLoader: false
			};
			case types.CONTANT_API_LOADING_START:
			return {
				...state,
				contantLoader: true
			};
		case types.CONTANT_API_LOADING_STOP:
			return {
				...state,
				contantLoader: false
			};
		case types.BOOKING_API_LOADING_START:
			return {
				...state,
				bookingLoader: true
			};
		case types.BOOKING_API_LOADING_STOP:
			return {
				...state,
				bookingLoader: false
			};
		case types.IS_INTERNET_CONNECTED:
			if (action.payload === false) {
				return {
					...state,
					isInternetConnected: action.payload,
					loader: false
				};
			} else {
				return {
					...state,
					isInternetConnected: action.payload
				};
			}
		case types.ON_ERROR_RECEIVED:
			return {
				...state,
				loader: false,
				errorMessage: action.payload.message,
				isError: action.payload.type
			};
		case types.CONFIG_SUCCESS:
			return {
				...state,
				configData: { ...action.payload },
			};
		case types.CONFIG_ERROR:
			return {
				...state,
				message: action.payload,
			};
		case types.SET_CURRENT_ROUTE_NAME:
			return {
				...state,
				currentRouteName: action.payload,
			};
			case types.TRAS_REQUESTED:
			return {
				...state,
				isTranslation: true,
			};
		case types.TRAS_FAILURE:
			return {
				...state,
				translation: action.payload,
				isTranslation: false,
			};
		case types.TRAS_SUCCESS:
			return {
				...state,
				translation: action.payload,
				isTranslation: false,
			};
		case types.SET_CURRENT_LANGUAGE:
			return {
				...state,
				currentLanguage: action.payload,
			};

		default:
			return state
	}
};

export default globalReducer

