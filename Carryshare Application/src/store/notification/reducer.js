import * as types from './actionTypes';

const initialState = {
	loading:false,
	list:[],
	detail:{},
    errorMessage: '',
	isError: false,
	unreadCount: 0,
};
const BookingReducer = (state = initialState, action) => {
    switch (action.type) {
		
		case types.NOTIFICATION_LIST_REQUEST:
			return {
				...state,
				loading: true,
			};
       case types.NOTIFICATION_LIST_SUCCESS:
			return {
				...state, 
				loading: false,
				isError: false,
				list: action.payload.data,
				unreadCount: action.payload.count,
			};
		case types.NOTIFICATION_LIST_ERROR:
			return {
				...state,
				loading: false,
				errorMessage: action.payload,
				isError: true,
			};
		case types.NOTIFICATION_DETAIL_SUCCESS:
				return {
					...state,
					detail: action.payload,
		};	
			
			
        default:
            return state
    }
};

export default BookingReducer

