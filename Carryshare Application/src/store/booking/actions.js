import * as types from './actionTypes'
import ApiList from "../../webservice/ApiList";
import {userApiLoadingStart, userApiLoadingStop} from './../global'

import {AlertHelper} from '../../Constants/AlertHelper';



export const mackTripAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		dispatch({ type: types.TRIP_REQUEST});
		return  ApiList.mackTrip(params).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.TRIP_SUCCESS, payload: data.data});
				navigation.navigate('MyTab')
			}else{
				dispatch({ type: types.TRIP_ERROR, payload:data.error});
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.TRIP_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
		});
	};
};
//// created but not in use
// export const getBookingListAction = (params) => {	
// 	return (dispatch) => {
// 		dispatch(userApiLoadingStart());
// 		dispatch({ type: types.BOOKING_LIST_REQUEST});
// 		return  ApiList.getBookingList(params).then(data => {         
// 			if(data.status == 200){
// 				dispatch({ type: types.BOOKING_LIST_SUCCESS, payload: data.data});
// 			}else{
// 				dispatch({ type: types.BOOKING_LIST_ERROR, payload:data.error});
// 			}
// 			dispatch(userApiLoadingStop());
// 		}).catch((error) => {
// 			dispatch({ type: types.BOOKING_LIST_ERROR, payload: error.error });
// 			dispatch(userApiLoadingStop());
// 		});
// 	};
// };

// export const getBookingDetailAction = (params,navigation) => {	
// 	return (dispatch) => {
// 		dispatch(userApiLoadingStart());
// 		return  ApiList.getBookingDetail(params).then(data => {         
// 			if(data.status == 200){
// 				dispatch({ type: types.BOOKING_DETAIL_SUCCESS, payload: data.data});
// 				navigation.navigate('BookingDetail');
// 			}else{
// 				dispatch({ type: types.BOOKING_DETAIL_ERROR, payload:data.error});
// 			}
// 			dispatch(userApiLoadingStop());
// 		}).catch((error) => {
// 			dispatch({ type: types.BOOKING_DETAIL_ERROR, payload:data.error});
// 			dispatch(userApiLoadingStop());
// 		});
// 	};
// };

///// old



export const createConversationIdForManager = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.createConversationIdForManager({booking_id:params}).then(data => {         
			if(data.status == 200){
				dispatch(userApiLoadingStop());
				navigation.navigate('ConversionScreen', {
					title: 'Chat',
					url: data.data.conversation_url,
				});
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch(userApiLoadingStop());
		});
	};
};


export const getBookingPaymentListAction = (params) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		dispatch({ type: types.BOOKING_LIST_REQUEST});
		return  ApiList.getBookingPaymentList(params).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.BOOKING_PAYMENT_LIST_SUCCESS, payload: data.data});
			}else{
				dispatch({ type: types.BOOKING_LIST_ERROR, payload:data.error});
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch({ type: types.BOOKING_LIST_ERROR, payload: error.error });
			dispatch(userApiLoadingStop());
		});
	};
};





export const vendorGetBookingDetailAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.getBookingDetail({booking_id:params}).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.BOOKING_DETAIL_SUCCESS, payload: data.data});
				navigation.navigate('JobDetailScreen')
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch(userApiLoadingStop());
		});
	};
};

export const bookingCancelAction = (params) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.bookingCancel(params).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.BOOKING_DETAIL_SUCCESS, payload: data.data});
			}
			dispatch(userApiLoadingStop());
		}).catch((error) => {
			dispatch(userApiLoadingStop());
		});
	};
};


export const bookingAssignToVendorAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.bookingAssignToVendor(params).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.BOOKING_DETAIL_SUCCESS, payload: data.data});
				setTimeout(() => {
					AlertHelper.success('Vendor assign successfully.');
				  }, 100);
			}
			else {
				setTimeout(() => {
					AlertHelper.warning(data.message);
				  }, 100);
			}


			dispatch(userApiLoadingStop());
			
			navigation.goBack();
		}).catch((error) => {
			dispatch(userApiLoadingStop());

			navigation.goBack();
		});
	};
};


export const acceptBookingByVendorAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.bookingAssignToVendor(params).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.BOOKING_DETAIL_SUCCESS, payload: data.data});
				setTimeout(() => {
					AlertHelper.success('Booking accepted successfully.');
				  }, 100);
				 
			}
			else {
				setTimeout(() => {
					AlertHelper.warning(data.message);
				  }, 100);
			}

			dispatch(userApiLoadingStop());
			
		}).catch((error) => {
			dispatch(userApiLoadingStop());
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);

		});
	};
};



export const startBookingByVendorAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.startBooking(params).then(data => {         
			if(data.status == 200){
				dispatch({ type: types.BOOKING_DETAIL_SUCCESS, payload: data.data});
				setTimeout(() => {
					AlertHelper.success('Service Started successfully.');
				  }, 100);
			}
			else {
				setTimeout(() => {
					AlertHelper.warning(data.message);
				  }, 100);
			}

			dispatch(userApiLoadingStop());
			
		}).catch((error) => {
			dispatch(userApiLoadingStop());
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);

		});
	};
};

export const otpConfirmBookingByVendorAction = (params,navigation) => {	
	return (dispatch) => {
		dispatch(userApiLoadingStart());
		return  ApiList.otpConfirmForCompleteBooking(params).then(data => {         
			if(data.status == 200){
				setTimeout(() => {
					AlertHelper.success('Booking Completed successfully.');
				  }, 100);
				  navigation.navigate('MyTab');
			}
			else {
				setTimeout(() => {
					AlertHelper.warning(data.message);
				  }, 100);
			}

			dispatch(userApiLoadingStop());
			
		}).catch((error) => {
			dispatch(userApiLoadingStop());
			setTimeout(() => {
				AlertHelper.warning(error);
			  }, 100);

		});
	};
};