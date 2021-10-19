import React ,{ useState, useEffect } from "react";
import { View, Text, Image ,TouchableOpacity,Keyboard} from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import styles from "./ChangePasswordScreenStyle";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { changePasswordAction, loginAction } from '../../store/user';
import { getTranslatedValue } from '../../Constants/translation';
import {AlertHelper} from '../../Constants/AlertHelper';
import AsyncStorage from '@react-native-community/async-storage';
import { ScrollView } from "react-native";


const RegistrationScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);

	const [oldPassword, setOldPassword] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/security_page',
			placeholder,
		);
	}
	const do_authantication = () => {
		let isValidForm = true;
		let messageText = '';
		if (oldPassword ==''){
			isValidForm = false
			messageText = translation("old_password_error_sub_header_text")
		}
		else if (newPassword == '') {
			isValidForm = false
			messageText =translation ("new_password_error_sub_header_text")
		}
		else if (oldPassword === newPassword){
			isValidForm = false
			messageText = translation("old_new_password_same_error_sub_header_text")
		}
		else if ((newPassword.length) < 8) {
			isValidForm = false		
			messageText = translation("password_length_error_sub_header_text")

		}
		else if (confirmPassword == '') {
			isValidForm = false
			messageText =translation("confirm_password_error_sub_header_text")
		}
		else if ((confirmPassword.length) < 8) {
			isValidForm = false
			messageText = translation("password_length_error_sub_header_text")
		}
		else if (newPassword !== confirmPassword){
			isValidForm = false
			messageText = translation("new_confirm_password_same_error_sub_header_text")

		}
		if (isValidForm){
			let request={}
			request.old_password=oldPassword;
			request.new_password=newPassword;
			dispatch(changePasswordAction(request,navigation))
		}
		else {
			AlertHelper.warning(messageText);
		}
	}

	return (
	
	<View style={[styles.mainContainer,]}>
	  <Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('change_password_heading_text')} />

	  <ScrollView>
		<View style={styles.container}>
			
			<Molecules.InputField 
			secureTextEntry={true} 
			isRight={true}
			title={translation('old_password_label_text')} 
			placeholder={translation('old_password_placeholder')} 
			value={oldPassword} 
			onChangeText={(text) => setOldPassword(text)}
			 />
				
			<Molecules.InputField 
			secureTextEntry={true} 
			isRight={true}
			title={translation('new_password_label_text')} 
			placeholder={translation('new_password_placeholder')} 
			value={newPassword} 
			onChangeText={(text) => setNewPassword(text)} />

			<Molecules.InputField 
			secureTextEntry={true} 
			title={translation('confirm_password_label_text')} 
			placeholder={translation('confirm_password_placeholder')} 
			value={confirmPassword} 
			onChangeText={(text) => setConfirmPassword(text)} />

			
			
		</View>
		 </ScrollView>
		<View 	style={styles.buttonContainer}>

		<TouchableOpacity
        	style={styles.button}
        	onPress={()=>{ do_authantication() }}>
       		<Text style={styles.textButton}>{translation('save_changes_button_text')} </Text>
      		</TouchableOpacity>
		</View>

			
		</View>
	
	);
}



export default RegistrationScreen;
