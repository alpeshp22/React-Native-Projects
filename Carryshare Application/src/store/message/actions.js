import * as types from './actionTypes'
import ApiList from "../../webservice/ApiList";
import {apiLoadingStart, apiLoadingStop} from './../global'

import {AlertHelper} from '../../Constants/AlertHelper';

export const getconversationsListAction = () => {	
	return (dispatch) => {
		dispatch(apiLoadingStart());
		dispatch({ type: types.MESSAGE_LIST_REQUEST});
		return  ApiList.getconversationsList().then(data => {         
			if(data.status == 200){
				dispatch({ type: types.MESSAGE_LIST_SUCCESS, payload: data});
			}else{
				dispatch({ type: types.MESSAGE_LIST_ERROR, payload:data.error});
				setTimeout(() => {
					AlertHelper.warning(data.message);
				  }, 100);
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.MESSAGE_LIST_ERROR, payload: error.error });
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);
			dispatch(apiLoadingStop());
		});
	};
};



export const getconversationsListWithoutLoadingAction = () => {	
	return (dispatch) => {
		return  ApiList.getconversationsList().then(data => {         
			if(data.status == 200){
				dispatch({ type: types.MESSAGE_LIST_SUCCESS, payload: data});
			}
			else{
				dispatch({ type: types.MESSAGE_LIST_ERROR, payload:data.message});
				setTimeout(() => {	AlertHelper.warning(data.message);	}, 100);
			}
		}).catch((error) => {
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);
		});
	};
};
export const deleteConversatiosAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(apiLoadingStart());
		return  ApiList.deleteConversation(params).then(data => {       
			if(data.status == 200){
				dispatch({ type: types.MESSAGE_LIST_SUCCESS, payload: data});
				navigation.navigate('MessageListScreen')
			}
			else{
				dispatch({ type: types.MESSAGE_LIST_ERROR, payload:data.message});
				setTimeout(() => {	AlertHelper.warning(data.message);	}, 100);
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);
			  dispatch(apiLoadingStop());
		});
	};
};
export const contactRequestBookingAction = (params,navigation) => {
	return (dispatch) => {
		dispatch(apiLoadingStart());
		return  ApiList.contactRequestBooking(params).then(data => {      
			if(data.status == 200){
				dispatch({ type: types.MESSAGE_LIST_SUCCESS, payload: data});
				navigation.navigate('Home')
				
			}
			else{
				dispatch({ type: types.MESSAGE_LIST_ERROR, payload:data.message});
				setTimeout(() => {	AlertHelper.warning(data.message);	}, 100);
			}
			dispatch(apiLoadingStop());
		}).catch((error) => {
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);
			  dispatch(apiLoadingStop());
		});
	};
};

