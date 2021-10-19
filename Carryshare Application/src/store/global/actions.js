import * as types from './actionTypes'
import ApiList from "../../webservice/ApiList";
import {getProfileAction} from "../user/actions";
import AsyncStorage from '@react-native-community/async-storage';
import {AlertHelper} from '../../Constants/AlertHelper';


export const apiLoadingStart = () => ({type: types.API_LOADING_START});
export const apiLoadingStop = () => ({type: types.API_LOADING_STOP});
export const userApiLoadingStart = () => ({type: types.USER_API_LOADING_START});
export const userApiLoadingStop = () => ({type: types.USER_API_LOADING_STOP});

export const bookingApiLoadingStart = () => ({type: types.BOOKING_API_LOADING_START});
export const bookingApiLoadingStop = () => ({type: types.BOOKING_API_LOADING_STOP});
////contant 
export const contantApiLoadingStart = () => ({type: types.CONTANT_API_LOADING_START});
export const contantApiLoadingStop = () => ({type: types.CONTANT_API_LOADING_STOP});

export const noInternetConnected = (isConnected) => ({type: types.IS_INTERNET_CONNECTED, payload:isConnected});

const errorHendler = (type, message) => {
    return (dispatch) => {
        dispatch(onError({message: message, type: type}));
        setTimeout(() => {dispatch(onError(''));}, 2000)
    }
};

const onError = (data) => ({type: types.ON_ERROR_RECEIVED, payload: data});


export const getConfigurationAction = (navigation) => {	
	return (dispatch) => {
		let request={}
		request.language_code='en';
		return  ApiList.getConfiguration().then(response => {   
				if(response.status == 200){
				dispatch({ type: types.CONFIG_SUCCESS, payload: response.data});
				dispatch(setCurrentLanguage(request));
				// dispatch(getTranslationAction(request,navigation));
			}else{
				dispatch({ type: types.CONFIG_ERROR, payload:response.error});
			}
		}).catch((error) => {
			dispatch({ type: types.CONFIG_ERROR, payload: error.error });
		});
		
	};
};

export const reloadConfiguration = (navigation) => {	
	return (dispatch) => {
		return  ApiList.getConfiguration().then(response => {   
				if(response.status == 200){
				dispatch({ type: types.CONFIG_SUCCESS, payload: response.data});
				// dispatch(getTranslationAction(request,navigation));
			}else{
				dispatch({ type: types.CONFIG_ERROR, payload:response.error});
			}
		}).catch((error) => {
			dispatch({ type: types.CONFIG_ERROR, payload: error.error });
		});
		
	};
};
export const getTranslationAction = (request,navigation) => {
	console.log('translation')
	return (dispatch) => {
		dispatch(apiLoadingStart());
			dispatch({ type: types.TRAS_REQUESTED });
		
		return ApiList.getTranslationList(request).then(response => {
			if (response.status == 200) {
				dispatch({ type: types.TRAS_SUCCESS, payload: response.data });
				dispatch(setRedirect(navigation))
			} else {
				dispatch({ type: types.TRAS_FAILURE, payload: response.message });
				setTimeout(() => { AlertHelper.warning(response.message); }, 100);
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.TRAS_FAILURE, payload: error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(apiLoadingStop());
		});
	};
};

export const setCurrentLanguage = (language) => {
	console.log('language',language)
	return (dispatch) => {
	dispatch({ type: types.SET_CURRENT_LANGUAGE, payload: language.language_code });
	}
};


export const changeLanguageAction = (request) => {
	return (dispatch) => {
		dispatch(apiLoadingStart());
			dispatch({ type: types.TRAS_REQUESTED });
		
		return ApiList.getTranslationList(request).then(response => {
			if (response.status == 200) {
				
				dispatch({ type: types.TRAS_SUCCESS, payload: response.data });
				dispatch(setCurrentLanguage(request))
				dispatch(reloadConfiguration(request))
			} else {
				dispatch({ type: types.TRAS_FAILURE, payload: response.message });
				setTimeout(() => { AlertHelper.warning(response.message); }, 100);
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.TRAS_FAILURE, payload: error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(apiLoadingStop());
		});
	};
};
export const setRedirect = (navigation) => {
	return async (dispatch) => {
		try {
			// let accessToken = await AsyncStorage.getItem('accessToken');
			AsyncStorage.getItem('accessToken').then((accessToken) => {
				// console.log(33333)
				console.log('=====setRedirect====accessToken====',accessToken)
			if (accessToken == null || accessToken == undefined) {
						navigation.navigate("Login");
					}
			else {
				dispatch(getProfileAction(navigation))
			
			}
		});
		} catch (err) {
			
		}
	}
}



export const setCurrentRouteName = (routeName) => {	
	return (dispatch) => {
		dispatch({ type: types.SET_CURRENT_ROUTE_NAME, payload: routeName });

	};
};