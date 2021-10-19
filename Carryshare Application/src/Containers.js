import React, { useEffect } from 'react';
import { SafeAreaView,useColorScheme, BackHandler, Alert,StatusBar} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "./Navigation";
import { setCurrentRouteName } from "./store/global";
import { theme } from './Constants/Theme';
import * as ICONS from 'resources';
import DropdownAlert from 'react-native-dropdownalert';
import { AlertHelper } from './Constants/AlertHelper';
import { getTranslatedValue } from './Constants/translation';

const Containers = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector(state => state.global);
	let colorScheme = useColorScheme();
	const [isConnected, setIsConnected] = React.useState(true);
	const [bgBarColor, set_bgBarColor] = React.useState('#19282F');
	const [bgBarCotentColor, set_bgBarCotentColor] = React.useState('light-content');
	const [translucentMode, set_translucentMode] = React.useState(false);
	const [notificationObject, setNotificationObject] = React.useState({ notificationTitle: "", notificationMsg: "", notificationDetail: {} });
	const [isVisibleNotification, setIsVisibleNotification] = React.useState(false);
	
	console.log("currentRouteName", stateGlobal.currentRouteName)
	// console.log("isDeviceSupportBiometrick", stateGlobal.isDeviceSupportBiometrick)
	const effectDependency = stateGlobal.currentRouteName
	
	
	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/global',
			placeholder,
		);
	}

	
	const backHandlerListener = () => {
		if(stateGlobal.currentRouteName == 'Home'||stateGlobal.currentRouteName == 'Settings'||stateGlobal.currentRouteName == 'Payment'||stateGlobal.currentRouteName == 'Bid'||stateGlobal.currentRouteName== 'ProfileComplete'){
			Alert.alert(translation('exit_app_modal_title_text'), translation('exit_app_modal_description_text'), [
				{
					text: translation('exit_app_modal_cancel_button_text'),
					onPress: () => null,
					style: "cancel"
				},
				{ text: translation('exit_app_modal_ok_button_text'), onPress: () => BackHandler.exitApp() }
			]);
			return true;
		}else{
			return false;
		}			
	};

	useEffect(() => {
		BackHandler.addEventListener("hardwareBackPress", backHandlerListener );
		return () => {
			BackHandler.removeEventListener("hardwareBackPress", backHandlerListener);
		};
	}, [backHandlerListener])

	







	return (
		<>
			<SafeAreaView style={{ flex: 1, backgroundColor: theme.PRIMARY_BG }}>
				<Navigation setCurrentRouteName={(value) => { dispatch(setCurrentRouteName(value)); }} />
			</SafeAreaView>
			<DropdownAlert infoColor={'#B70000'} infoImageSrc={ICONS.BELL_INFO} updateStatusBar={false} defaultContainer={{ padding: 8, paddingTop: Platform.OS === 'android' ? 4 : 0, flexDirection: 'row' }} ref={(ref) => AlertHelper.setDropDown(ref)} onClose={() => AlertHelper.invokeOnClose()} />
			
			
		</>
	);
}

export default Containers;