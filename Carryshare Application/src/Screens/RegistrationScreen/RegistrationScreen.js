import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Fontisto';
import * as resources from 'resources';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import styles from './RegistrationScreenStyle';
import * as Validate from '../../Constants/validation';
import commonStyle from "../../Constants/CommonStyle";
import { color } from "../../Constants/Color";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signUpAction } from '../../store/user';
import { useDispatch, useSelector } from "react-redux";
import { AlertHelper } from '../../Constants/AlertHelper';
import AsyncStorage from '@react-native-community/async-storage';
import { getTranslatedValue } from '../../Constants/translation';
import ApiList from '../../webservice/ApiList';
import { apiLoadingStart, apiLoadingStop } from '../../store/global';


const RegistrationScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector(state => state.global);

	const [firstName, setFirstName] = useState('')
	const [title, setTitle] = useState('')
	const [lastName, setLastName] = useState('')
	const [country, setCountry] = useState(null)
	const [countryList, setCountryList] = useState([])
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [scrollEnabled, setScrollEnabled] = useState(true);
	const [currentStep, setCurrentStep] = useState(1);

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/registration_page',
			placeholder,
		);
	}
	const translation2 = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/profile_page',
			placeholder,
		);
	}
	React.useEffect(() => {
		if(currentStep===1){
			setTitle(translation('step_1_header_title'))
		}
		else if(currentStep===2){
			setTitle(translation2('country_placeholder'))
		}
		else if(currentStep===3){
			setTitle(translation2('mobile_number_label_text'))
		}
		else if(currentStep===4){
			setTitle(translation2('email_label_text'))
		}
		else if(currentStep===5){
			setTitle(translation('password_label_text'))
		}
	}, [currentStep]);
	React.useEffect(() => {

		let focusListener = navigation.addListener('focus', () => {
			if (stateGlobal.configData != null && stateGlobal.configData != undefined) {
				let country = [];
				stateGlobal.configData.country_list.map((value) => {
					let obj = {};
					obj.label = value.title;
					obj.value = value.id;;
					country.push(obj);
				});
				setCountryList(country)
			}
		});
		return focusListener;
	});
	const validateEmail=()=>{
		dispatch(apiLoadingStart());
		ApiList.userValidate({ email_address: email })
		.then((data) => {
		  if (data.status == 200) {
			 setCurrentStep(5);
				// break;
		  } else {
			setTimeout(() => {
			  AlertHelper.warning(data.message);
			//   break;
			}, 100);
		  }
		  dispatch(apiLoadingStop());
		})
		.catch((error) => {
		  setTimeout(() => {
			AlertHelper.warning(error);
			// break;
		  }, 100);
		  dispatch(apiLoadingStop());
		});
	}

	const do_authantication = () => {
		let isValidForm = true;
		let isValid = false;
		let messageText = '';
		console.log('counry===', country);
		switch (currentStep) {
			case 1:

				if (firstName == '') {
					isValidForm = false
					messageText = translation('first_name_error_sub_header_text')
					break;
				}
				else if (lastName == '') {
					isValidForm = false
					messageText = translation('last_name_error_sub_header_text')
					break;
				}
				else {

					setCurrentStep(2)
					break;
				}
			case 2:

				if (country == null) {
					isValidForm = false
					messageText = translation('country_validation_message')
					break;
				}
				else {
					setCurrentStep(3)
					break;
				}
			case 3:

				if (phone == '') {
					isValidForm = false
					messageText = translation('mobile_number_error_sub_header_text')
					break;
				}
				else {
					setCurrentStep(4)
					break;
				}
			case 4:

				if (email == '') {
					isValidForm = false
					messageText = translation('email_address_error_sub_header_text')
					break;
				}
				else if (Validate.isValidEmail(email) === false) {
					isValidForm = false
					messageText = translation('email_format_validation_message')
					break;
				}
				else {
					validateEmail()
					break;
					
				}
			case 5:
				if ((password.length) < 8) {
					isValidForm = false
					messageText = translation('password_length_validation_message')
					break;
				}
				else if (confirmPassword == '') {
					isValidForm = false
					messageText = translation('password_again_validation_message')
					break;
				}
				else if ((confirmPassword.length) < 8) {
					isValidForm = false
					messageText = translation('password_length_validation_message')
					break;
				}
				else if (password !== confirmPassword) {
					isValidForm = false
					messageText = translation('same_password_validation_message')
					break;
				}
				else {
					isValid=true
					// break;
				}
		}

		if (isValid) {
			let request = {}
			request.first_name = firstName
			request.last_name = lastName
			request.email_address = email
			request.password = password
			request.phone_number = phone
			request.country = country.value
			dispatch(signUpAction(request, navigation))
		}
		if(!isValidForm) {
			AlertHelper.warning(messageText);
		}
	}

	


	function renderFirstStep() {
		// First steps for First And Last Name
		return (
			<View>
				<Text style={styles.infoText}>
				{translation('step_1_title_text')}
				</Text>
				<Molecules.InputField
					title={translation('first_name_placeholder')}
					placeholder={translation('first_name_placeholder')}
					value={firstName}
					onChangeText={(text) => setFirstName(text)}
					inputContainerStyle={styles.inputContainerStyle}
				/>

				<Molecules.InputField
					title={translation('last_name_placeholder')}
					placeholder={translation('last_name_placeholder')}
					value={lastName}
					onChangeText={(text) => setLastName(text)}
					inputContainerStyle={styles.inputContainerStyle} />


			</View>
		)
	}
	function renderSecondStep() {
		// First steps for First And Last Name
		return (
			<View>
				<Text style={styles.infoText}>
				{translation('step_2_title_text')}

				</Text>
				<View style={styles.bodycontainer}>
					<Text style={styles.lableText}>{translation('country_placeholder')}</Text>
					<Molecules.Dropdown
						setShowList={() => { setScrollEnabled(!scrollEnabled) }}
						selectedValue={country}
						data={countryList}
						placeholder={translation('country_placeholder')}
						value={country}
						inputContainerStyle={styles.dropInputContainer}
						placeholderStyle={styles.placeholderStyle}
						iconStyle={styles.dropdownIcon}
						listStyle={styles.listStyle}
						onChangeText={item => { setCountry(item) }} />
				</View>


			</View>
		)
	}
	function renderThirdStep() {
		// First steps for First And Last Name
		return (
			<View>
				<Text style={styles.infoText}>
				{translation('step_3_title_text')}
				</Text>
				<Molecules.InputField
					title={translation('mobile_number_placeholder')}
					placeholder={translation('mobile_number_placeholder')}
					keyboardType={'number-pad'}
					value={phone}
					onChangeText={(text) => setPhone(text)}
					inputContainerStyle={styles.inputContainerStyle} />

			</View>
		)
	}
	function renderfourthStep() {

		return (
			<View>
				<Text style={styles.infoText}>
				{translation('step_4_title_text')}

				</Text>
				<Molecules.InputField
					title={translation('email_placeholder')}
					placeholder={translation('email_placeholder')}
					value={email}
					keyboardType={'email-address'}
					onChangeText={(text) => setEmail(text)}
					inputContainerStyle={styles.inputContainerStyle} />

				<Text style={styles.textinfo}>
					{translation('step_4_bottom_text')}
				</Text>

			</View>

		)
	}
	function renderfifthStep() {

		return (
			<View>
				<Text style={styles.infoText}>
					{translation('step_5_title_text')}
				</Text>

				<Molecules.InputField
					secureTextEntry={true}
					isRight={true}
					title={translation('password_placeholder')}
					placeholder={translation('password_placeholder')}
					value={password}
					onChangeText={(text) => setPassword(text)}
					inputContainerStyle={styles.inputContainerStyle} />


				<Molecules.InputField
					secureTextEntry={true}
					title={translation('confirm_password_placeholder')}
					placeholder={translation('confirm_password_placeholder')}
					value={confirmPassword}
					onChangeText={(text) => setConfirmPassword(text)}
					inputContainerStyle={styles.inputContainerStyle} />

				<Text style={styles.textinfo2}>{translation('step_5_bottom_text')}</Text>

			</View>
		)
	}

	return (

		<View style={[styles.mainContainer, { flex: 1 }]}>
			<Organisms.Header _onLeftAction={() => {
				if (currentStep > 1) {
					setCurrentStep(currentStep - 1)
				} else {
					navigation.goBack();
				}
			}} title={title} />

			<ScrollView style={styles.containerView} scrollEnabled={scrollEnabled} >
				<View style={styles.container}>
					{currentStep === 1 && (
						<View style={{ width: '100%' }}>{renderFirstStep()}</View>
					)}
					{currentStep === 2 && (
						<View style={{ width: '100%' }}>{renderSecondStep()}</View>
					)}
					{currentStep === 3 && (
						<View style={{ width: '100%' }}>{renderThirdStep()}</View>
					)}
					{currentStep === 4 && (
						<View style={{ width: '100%' }}>{renderfourthStep()}</View>
					)}
					{currentStep === 5 && (
						<View style={{ width: '100%' }}>{renderfifthStep()}</View>
					)}

				</View>
			</ScrollView>
			<View style={styles.buttonView} >
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						do_authantication()
						// if (currentStep === 5) {
						// 	do_authantication();
						// } else {
						// 	setCurrentStep(currentStep + 1)
						// }
					}}>
					<Text style={styles.textButton}>{translation('register_button_text')}</Text>
				</TouchableOpacity>
			</View>
		</View>

	);
}



export default RegistrationScreen;
