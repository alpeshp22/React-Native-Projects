import * as types from './actionTypes';

const initialState = {
	faqList: [],
	faqDetails: [],
	message: '',
	cmsPage:{},
};
const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        
       
		case types.FAQLIST_SUCCESS:
			return {
				...state, 
				faqList: action.payload,
			};
		case types.FAQLIST_ERROR:
			return {
				...state,
				faqList:[],
				message: action.payload,
			};
		case types.FAQDETAILS_SUCCESS:
			return {
				...state, 
				faqDetails: action.payload,
			};
		case types.FAQDETAILS_ERROR:
			return {
				...state,
				faqDetails:[],
				message: action.payload,
			};
			case types.CMS_PAGE_SUCCESS:
				return {
					...state, 
					cmsPage: action.payload,
				};
			case types.CMS_PAGE_ERROR:
				return {
					...state,
					cmsPage:{},
					message: action.payload,
				};
			
        default:
            return state
    }
};

export default contentReducer

