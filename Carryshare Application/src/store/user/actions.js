import * as types from './actionTypes';
import {getConfigurationAction, userApiLoadingStart, userApiLoadingStop} from './../global';
import ApiList from '../../webservice/ApiList';
import AsyncStorage from '@react-native-community/async-storage';
import {AlertHelper} from '../../Constants/AlertHelper';
import {CommonActions} from '@react-navigation/native';
import {changeLanguageAction} from "../global/actions";

export const loginAction = (request, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.userAuthLogin(request).then(data => {
			if (data.status == 200) {
				if (data.data.access_token) {
					console.log('data.data.access_token',data.data.access_token)
				
					// let access_token =response.token_type+'  '+response.access_token;
					let access_token =data.data.access_token;
					AsyncStorage.setItem('accessToken',data.data.access_token)
				}
				dispatch(getProfileAction(navigation))
				dispatch(getGalleryImages())
				dispatch({ type: types.LOGINUSER_SUCCESS, payload: data.data });
			} else {
				dispatch({ type: types.LOGINUSER_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.LOGINUSER_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());
		});
	};
};
export const signUpAction = (request, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.signUpAction(request).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.LOGINUSER_SUCCESS, payload: data.data });
				navigation.navigate('Login');
			} else {
				dispatch({ type: types.LOGINUSER_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.LOGINUSER_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());
		});
	};
	
};
export const forgotPasswordAction = (request, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.forgotPassword(request).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.FORGOT_PASSWORD_SUCCESS, payload: data.data });
				navigation.navigate('Login');
			} else {
				dispatch({ type: types.FORGOT_PASSWORD_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.FORGOT_PASSWORD_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());
		});
	};
	
};
export const changePasswordAction = (request, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.changePassword(request).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.CHANGE_PASSWORD_SUCCESS, payload: data.data });
				navigation.goBack();
			} else {
				dispatch({ type: types.CHANGE_PASSWORD_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.CHANGE_PASSWORD_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());
		});
	};
	
};


export const getProfileAction = (navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.getProfile().then(data => {
			let request={}
			if (data.status == 200) {
				request.language_code=data.data.language_code
				console.log('data.data',request)
				dispatch(changeLanguageAction(request));
				if(data.data.profile_complete==0){
					setTimeout(() => { navigation.navigate("ProfileComplete"); }, 1000);

				}
				else{
					setTimeout(() => { navigation.navigate("MyTab"); }, 1000);

				}
				dispatch({ type: types.GETPROFILE_SUCCESS, payload: data.data });
			} else {
				dispatch({ type: types.GETPROFILE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());

		}).catch((error) => {
			dispatch({ type: types.GETPROFILE_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());

		});

	};
};

export const updateProfilIemage = (params, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.updateProfile(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.UPDATEPROFILE_SUCCESS, payload: data.data });
				dispatch(userApiLoadingStop());
				

			} else {
				dispatch({ type: types.UPDATEPROFILE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.UPDATEPROFILE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
};
export const profileCompleteAction = (params, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.updateProfile(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.UPDATEPROFILE_SUCCESS, payload: data.data });
				dispatch(userApiLoadingStop());
				navigation.navigate('MyTab')

			} else {
				dispatch({ type: types.UPDATEPROFILE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.UPDATEPROFILE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
};
export const updateUserLanguageAction = (params) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.updateProfile(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.UPDATEPROFILE_SUCCESS, payload: data.data });
				dispatch(userApiLoadingStop());

			} else {
				dispatch({ type: types.UPDATEPROFILE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.UPDATEPROFILE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
}
export const updateProfileAction = (params, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.updateProfile(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.UPDATEPROFILE_SUCCESS, payload: data.data });
				dispatch(userApiLoadingStop());
				navigation.goBack()

			} else {
				dispatch({ type: types.UPDATEPROFILE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.UPDATEPROFILE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
};
export const getGalleryImages = () => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.getGalleryImages().then(data => {
			if (data.status == 200) {

				dispatch({ type: types.GET_GALLERY_SUCCESS, payload: data.data });
			} else {
				dispatch({ type: types.GET_GALLERY_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());

		}).catch((error) => {
			dispatch({ type: types.GET_GALLERY_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());

		});

	};
};
export const storeGalleryImages = (params, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		console.log('param',params)
		return ApiList.storeGalleryImages(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.STORE_GALLERY_IMAGE_SUCCESS, payload: data.data });
				dispatch(userApiLoadingStop());
			} else {
				dispatch({ type: types.STORE_GALLERY_IMAGE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.STORE_GALLERY_IMAGE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
};

export const deleteGalleryImages = (params, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		console.log('param',params)
		return ApiList.deleteGalleryImages(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.DELETE_GALLERY_IMAGE_SUCCESS, payload: data.data });
				navigation.navigate('Gallery')
				dispatch(userApiLoadingStop());
			} else {
				dispatch({ type: types.DELETE_GALLERY_IMAGE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.DELETE_GALLERY_IMAGE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
};
export const getDocumentAction = () => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return ApiList.getDocumentAction().then(data => {
			if (data.status == 200) {

				dispatch({ type: types.GET_DOCUMENT_SUCCESS, payload: data.data });
			} else {
				dispatch({ type: types.GET_DOCUMENT_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());

		}).catch((error) => {
			dispatch({ type: types.GET_DOCUMENT_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error); }, 100);
			dispatch(userApiLoadingStop());

		});

	};
};
export const documentStoreAction = (params, navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		console.log('param',params)
		return ApiList.documentStoreAction(params).then(data => {
			if (data.status == 200) {
				dispatch({ type: types.DOCUMENT_STORE_SUCCESS, payload: data.data });
				navigation.navigate('DocumentList');
				dispatch(userApiLoadingStop());
			} else {
				dispatch({ type: types.DOCUMENT_STORE_ERROR, payload: data.message });
				setTimeout(() => { AlertHelper.warning(data.message); }, 100);
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.DOCUMENT_STORE_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(userApiLoadingStop());

		});
	};
};
///
export const setLocalDataToStore = (data) => {
	return (dispatch) => {
		dispatch({ type: types.OTPVERIFICATION_SUCCESS, payload: data });
	};
};



export const logoutAction = (navigation) => {
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		AsyncStorage.setItem('accessToken', '');
		navigation.dispatch(
			CommonActions.reset({
				index: 0,
				routes: [
					{ name: 'Login' },
				],
			})
		);
		setTimeout(() => {
			dispatch(userApiLoadingStop());
		}, 200);

	};
};


