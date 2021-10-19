import { combineReducers } from 'redux';
import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";

import global from './global';
import user from './user';
import booking from './booking';
// import notification from './notification';
// import message from'./message';
import content from './content'


const config = {
	key: "root",
	debug: true,
	storage: AsyncStorage,
};

const AppReducers = combineReducers({
	global,
	user,
	booking,
	// notification,
	content
});

const rootReducer = (state, action) => {
	return AppReducers(state, action);
}

const pReducer = persistReducer(config, rootReducer);

export default pReducer;

