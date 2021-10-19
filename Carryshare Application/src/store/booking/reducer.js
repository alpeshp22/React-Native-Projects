import * as types from './actionTypes';

const initialState = {
	loading: false,
	list:null,
	tripDetail: [],
	detail: {},
	errorMessage: '',
	isError: false,
	bookingPaymentList: [],
};
const BookingReducer = (state = initialState, action) => {
	switch (action.type) {


		case types.TRIP_REQUEST:
			return {
				...state,
				loading: true,
			};
		case types.TRIP_SUCCESS:
			return {
				...state,
				loading: false,
				isError: false,
				tripDetail: action.payload,
			};
		case types.TRIP_ERROR:
			return {
				...state,
				loading: false,
				isError: true,
			};
// declare but not in use
			// case types.BOOKING_LIST_SUCCESS:
			// return {
			// 	...state,
			// 	loading: false,
			// 	isError: false,
			// 	list: action.payload,
			// };
			// case types.BOOKING_LIST_ERROR:
			// 	return {
			// 		...state,
			// 		loading: false,
			// 		errorMessage: action.payload,
			// 		isError: true,
			// 		list:null,
			// 	};
			// case types.BOOKING_DETAIL_SUCCESS:
			// 	return {
			// 		...state,
			// 		detail: action.payload,
			// 	};
			// 	case types.BOOKING_DETAIL_ERROR:
			// 		return {
			// 			...state,
			// 			detail:{},
			// 		};
	
			
		//// old 

		case types.BOOKING_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
		
		case types.BOOKING_PAYMENT_LIST_SUCCESS:
			return {
				...state,
				loading: false,
				isError: false,
				bookingPaymentList: action.payload,
			};
		
		default:
			return state
	}
};

export default BookingReducer

