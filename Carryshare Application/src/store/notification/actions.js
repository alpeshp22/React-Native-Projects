import * as types from './actionTypes'
import ApiList from "../../webservice/ApiList";
import {apiLoadingStart, apiLoadingStop} from './../global'

import {AlertHelper} from '../../Constants/AlertHelper';

export const getNotificationsListAction = () => {	
	return (dispatch) => {
		dispatch(apiLoadingStart());
		dispatch({ type: types.NOTIFICATION_LIST_REQUEST});
		return  ApiList.getNotificationsList().then(data => {         
			if(data.status == 200){
				dispatch({ type: types.NOTIFICATION_LIST_SUCCESS, payload: data});
			}else{
				dispatch({ type: types.NOTIFICATION_LIST_ERROR, payload:data.error});
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.NOTIFICATION_LIST_ERROR, payload: error.error });
			dispatch(apiLoadingStop());
		});
	};
};



export const getNotificationsListWithoutLoadingAction = () => {	
	return (dispatch) => {
		return  ApiList.getNotificationsList().then(data => {         
			if(data.status == 200){
				dispatch({ type: types.NOTIFICATION_LIST_SUCCESS, payload: data});
			}
		}).catch((error) => {
		});
	};
};

export const deleteNotificationAction = (param) => {	
	return (dispatch) => {
		dispatch(apiLoadingStart());
		dispatch({ type: types.NOTIFICATION_LIST_REQUEST});
		return  ApiList.deleteNotification(param).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.NOTIFICATION_LIST_SUCCESS, payload: data});
			}else{
				dispatch({ type: types.NOTIFICATION_LIST_ERROR, payload:data.error});
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.NOTIFICATION_LIST_ERROR, payload: error.error });
			dispatch(apiLoadingStop());
		});
	};
};


export const markAsReadNotificationAction = (param) => {	
	return (dispatch) => {
		return  ApiList.markAsRead({notification_id:param}).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.NOTIFICATION_LIST_SUCCESS, payload: data});
			}
		}).catch((error) => {
		});
	};
};