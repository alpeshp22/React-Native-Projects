import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./SplashScreenStyle";
import AsyncStorage from '@react-native-community/async-storage';
import * as resources from 'resources';
import { theme } from "../../Constants/Theme";
import {setCurrentLanguage, apiLoadingStop,getConfigurationAction,getTranslationAction} from '../../store/global';
import {redirectToInitialScreen} from '../../store/global';
import {useSelector, useDispatch } from "react-redux";
import * as Atom from "../../Components/atoms";

const SplashScreen = ({ navigation,  }) => {
	const dispatch = useDispatch();
		let request={}
		dispatch(apiLoadingStop())
	request.language_code='en';
dispatch(getConfigurationAction(navigation));
	dispatch(getTranslationAction(request,navigation));
	

	
	return (
		<View  style={[styles.container]}>
			<Image  source={resources.APP_LOGO} style={styles.imgLogo}/>
			{/* <Atom.Loader loading={true}/> */}
		</View>
	);
}



export default SplashScreen;
