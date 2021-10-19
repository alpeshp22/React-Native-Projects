import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	Image,
	TouchableOpacity,
	Keyboard,
	TextInput,
	Alert,
} from 'react-native';
import * as resources from 'resources';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/EvilIcons";
import Icon3 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon4 from 'react-native-vector-icons/Entypo';
import styles from './LoginScreenStyle';
import * as Molecules from '../../Components/molecules';
import { color } from '../../Constants/Color';
import Modal from 'react-native-modal';
import { useDispatch,useSelector } from 'react-redux';
import { AlertHelper } from '../../Constants/AlertHelper';
import * as Atoms from '../../Components/atoms';
import * as Validate from '../../Constants/validation';
import { loginAction,forgotPasswordAction} from '../../store/user/actions';
import { getTranslatedValue } from '../../Constants/translation';
const LoginScreen = ({ navigation }) => {

	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);
	// const [email, setEmail] = React.useState('');
	// const [password, setPassword] = React.useState('');
	const [email, setEmail] = React.useState('meetmalay@gmail.com');
	const [password, setPassword] = React.useState('urvaa1205');	
	const [emailAddress, setEmailAddress] = useState('');
	const [isVisible, setIsVisible] = useState(false);
	const [icon, setIcon] = React.useState('eye-with-line');
	const [isPasswordVisible, setIsPasswordVisible] = React.useState(true);

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/login_page',
			placeholder,
		);
	}


	const _changeIcon = () => {
		setIcon(icon==='eye'?'eye-with-line' : 'eye')
		setIsPasswordVisible(!isPasswordVisible)
	}
	const _doLogin = () => {
		let isValidForm = true;
		let messageText = '';
		if (email == '') {
			isValidForm = false;
			messageText = translation('email_required_validation_message')
		} else if (Validate.isValidEmail(email.trim()) === false) {
			isValidForm = false;
			messageText = translation('email_format_validation_message')
		} else if (password == '') {
			isValidForm = false;
			messageText = translation('password_required_validation_message')
		}
		else if ((password.length) < 8) {
			isValidForm = false
			messageText = translation('password_length_validation_message')
		}
		if (isValidForm) {
			let request={}
			request.email_address=email.trim();
			request.password=password.trim();
			dispatch(loginAction(request,navigation))
			
		}
		else {
			AlertHelper.warning(messageText);
		}
	};

	const authantication_forgot = () => {
		let isValidForm = true;
		let messageText = '';

		if (emailAddress == '') {
			isValidForm = false
			messageText = translation('email_required_validation_message')
		}
		else if (Validate.isValidEmail(emailAddress) === false) {
			isValidForm = false
			messageText = translation('email_format_validation_message')
		}
		if (isValidForm) {
			let request={}
			request.email_address=emailAddress;
			dispatch(forgotPasswordAction(request,navigation))
		}
		else {
			AlertHelper.warning(messageText);
		}

	}
console.log('_- translation', translation('email_placeholder'))
	return (
		<>
			<View style={[styles.mainContainer]}>

				<View style={styles.input}>
					<View style={styles.logoContainer}>
						<Image style={styles.TopImageLogo} source={resources.LOGO} />
					</View>

					<View style={styles.inputGroup}>
						<Icon3 name="email-outline" style={[styles.inputIcon]} />
						<Atoms.TextInput textFieldStyle={styles.inputContainer1}
							placeholder={translation('email_placeholder')}
							value={email} onChangeText={(value) => { setEmail(value) }}
						/>
					</View>
					<View style={styles.inputGroup}>
						<Icon name="lock" style={[styles.inputIcon]} />
						<Atoms.TextInput textFieldStyle={styles.inputContainer1}
							placeholder={translation('password_placeholder')}
							secureTextEntry={isPasswordVisible}
							value={password} onChangeText={(value) => { setPassword(value) }}
						/>
						<Icon4 name={icon} style={[styles.eyeIcon]} size={20} onPress={() =>  _changeIcon()} />

					</View>
					
					<TouchableOpacity
						style={styles.buttonLogin}
						onPress={() => { _doLogin() }}>
						<Text style={styles.btnTxt}>{translation('login_button_text')}</Text>
					</TouchableOpacity>


					<View style={styles.forgotPassword}>
						<TouchableOpacity
							onPress={() => {
								setIsVisible(!isVisible), setEmailAddress('');
							}}>
							<Text style={styles.forgot}>{translation('forgot_password_link_text')}</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						style={[styles.buttonLogin, { backgroundColor: color._555555 }]}
						onPress={() => { navigation.navigate('Registration')}}>
						<Text style={styles.btnTxt}>{translation('sign_up_button_text')}</Text>
					</TouchableOpacity>
				</View>
				<Atoms.Loader loading={stateGlobal.userLoader}	/>
			</View>
			<Modal
				//  isVisible={true}
				isVisible={isVisible}
				onBackButtonPress={() => setIsVisible(false)}
				onBackdropPress={() => setIsVisible(false)}
				animationIn='slideInUp'
				animationOut='slideOutDown'
				style={{ backgroundColor: 'transparent', margin: 0, }}
				coverScreen={false}
			>
				<View style={styles.modalContainer}>

					<View style={styles.modalInnerItem}>
						<View style={styles.modalHeader}>
							<View style={styles.modalTitle}>
								<Text style={styles.modalTitleStyle}>{translation('forgot_password_label_text')}</Text>
							</View>
							<TouchableOpacity style={styles.modalClose} onPress={() => { setIsVisible(false) }}>
								<Icon2 name='close' style={styles.modalCloseStyle} />
							</TouchableOpacity>
						</View>
						<View style={styles.modalInputContainer}>
							<Molecules.InputField placeholder={translation('email_placeholder')} titleStyle={{ fontSize: 20, paddingLeft: 20, }}
								value={emailAddress} onChangeText={(value) => { setEmailAddress(value) }}
								inputContainerStyle={styles.inputField}
							/>
						</View>	

						<TouchableOpacity
							style={styles.button}
							onPress={() => { authantication_forgot() }}>

							<Text style={styles.btnTxt}>{translation('reset_password_button_text')}</Text>

						</TouchableOpacity>

					</View>


				</View>
			</Modal>
		</>
	);
};

export default LoginScreen;
