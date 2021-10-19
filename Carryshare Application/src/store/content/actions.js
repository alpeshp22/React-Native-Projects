import * as types from './actionTypes'
import ApiList from "../../webservice/ApiList";
import { contantApiLoadingStart, contantApiLoadingStop } from './../global';
import { AlertHelper } from '../../Constants/AlertHelper';


export const getCmsPageAction = (params,navigation) => {
	return (dispatch) => {
		navigation.navigate("CmsPage");
		dispatch(contantApiLoadingStart());
		return ApiList.geCmsPage(params).then(response => {
			if (response.status == 200) {
				dispatch({ type: types.CMS_PAGE_SUCCESS, payload: response.data });
			} else {
				dispatch({ type: types.CMS_PAGE_ERROR, payload: response.message });
				setTimeout(() => { AlertHelper.warning(response.message); }, 100);
			}
			dispatch(contantApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.CMS_PAGE_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(contantApiLoadingStop());
		});
	};
};

export const getFaqListAction = () => {
	return (dispatch) => {
		dispatch(contantApiLoadingStart());
		return ApiList.getFaqList().then(response => {
			if (response.status == 200) {
				dispatch({ type: types.FAQLIST_SUCCESS, payload: response.data });
			} else {
				dispatch({ type: types.FAQLIST_ERROR, payload: response.message });
				setTimeout(() => { AlertHelper.warning(response.message); }, 100);
			}
			dispatch(contantApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.FAQLIST_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(contantApiLoadingStop());
		});
	};
};

export const getFaqDetailAction = (faqDetailId) => {
	return (dispatch) => {
		dispatch(contantApiLoadingStart());
		return ApiList.getFaqDetail(faqDetailId).then(response => {
			if (response.status == 200) {
				dispatch({ type: types.FAQDETAILS_SUCCESS, payload: response.data });
			} else {
				dispatch({ type: types.FAQDETAILS_ERROR, payload: response.message });
				setTimeout(() => { AlertHelper.warning(response.message); }, 100);
			}
			dispatch(contantApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.FAQDETAILS_ERROR, payload: error.error });
			setTimeout(() => { AlertHelper.warning(error.error); }, 100);
			dispatch(contantApiLoadingStop());
		});
	};
};