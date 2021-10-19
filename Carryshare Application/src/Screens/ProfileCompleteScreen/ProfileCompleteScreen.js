import React, { useState, useEffect } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	ImageBackground,
} from 'react-native';
import styles from './ProfileCompleteScreenStyle';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import * as Atoms from '../../Components/atoms';
import { AlertHelper } from '../../Constants/AlertHelper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as resources from 'resources';
import ImagePicker from 'react-native-image-picker';
import * as Validate from '../../Constants/validation';
import { useSelector, useDispatch } from 'react-redux';
import { profileCompleteAction } from '../../store/user/actions';
import { getTranslatedValue } from '../../Constants/translation';

const ProfileCompleteScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const [firstName, setFirstName] = useState('')
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const [fullName, setFullName] = React.useState('');
	const [lastName, setLastName] = useState('')
	const [country, setCountry] = useState(null)
	const [countryList, setCountryList] = useState([])
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [state, setState] = useState('')
	const [city, setCity] = useState('')
	const [pincode, setPincode] = useState('')
	const [address, setAddress] = useState('')
	const [userImage, setUserImage] = useState(null)
	const [imageFile, setImageFile] = useState(null)
	const [modalVisible, setModalVisible] = useState(false)
	const [scrollEnabled, setScrollEnabled] = useState(true);

	const languageTranslation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/profile_page',
			placeholder,
		);
	}
	const chooseGalleryImage = () => {

		const options = {
			title: 'Pick issue image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
				includeBase64: true,
			},
		};
		ImagePicker.launchImageLibrary(options, (response) => {
			console.log("response==", response.fileName)
		if(response.data!=undefined){
			setImageFile(response)
		}
		});
	}
	const chooseCameraImage = () => {
		const options = {
			mediaType: 'photo',
			includeBase64: true,
			maxHeight: 200,
			maxWidth: 200,
		}

		ImagePicker.launchCamera(options, (response) => {
			console.log("response==", response)
		if(response.data!=undefined){
			setImageFile(response)
		}
	}
		)
	}
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {
			if (stateUser.userData != null) {

				_setUpdateValue(stateUser.userData);
			}
			if (stateGlobal.configData != null && stateGlobal.configData != undefined) {
				let country = [];
				stateGlobal.configData.country_list.map((value) => {
					let obj = {};
					obj.label = value.title;
					obj.value = value.id;;
					country.push(obj);
				});
				setCountryList(country)
				console.log('stateGlobal', stateGlobal.configData.country_list)

			}

		});
		return unsubscribe;
	});
	React.useEffect(() => {
		if (stateUser.userData != null) {
			_setUpdateValue(stateUser.userData);
		}
	}, [stateUser]);

	const _setUpdateValue = (userData) => {
		setFullName(userData.full_name != null ? userData.full_name : '');
		setFirstName(userData.first_name != null ? userData.first_name : '');
		setLastName(userData.last_name != null ? userData.last_name : '');
		// setCountry(userData.country );
		setEmail(userData.email_address != null ? userData.email_address : '');
		setPhone(userData.phone_number != null ? userData.phone_number : '');
		setState(userData.state != null ? userData.state : '');
		setCity(userData.city != null ? userData.city : '');
		setPincode(userData.zip_code != null ? userData.zip_code : '');
		setAddress(userData.address_line1  != null ? userData.address_line1 : '');
		setUserImage(userData.image  != null ? userData.image : null);
		if (userData.country!= null ){
			let obj={}
			obj.value=userData.country.id;
			obj.label=userData.country.country_name;
		setCountry(obj);

		}
		else{
		setCountry(userData.country );

		}
	}

	const do_authantication = () => {
		let isValidForm = true;
		let messageText = '';

		if (firstName == '') {
			isValidForm = false
			messageText = languageTranslation("first_name_error_sub_header_text")
		}
		else if (lastName == '') {
			isValidForm = false
			messageText = languageTranslation("last_name_error_sub_header_text")
		}
		else if (country == '') {
			isValidForm = false
			messageText = languageTranslation("country_validation_message")
		}
		else if (email == '') {
			isValidForm = false
			messageText = languageTranslation("email_address_error_sub_header_text")
		}
		else if (Validate.isValidEmail(email) === false) {
			isValidForm = false
			messageText = languageTranslation("email_format_validation_message")
		}
		else if (phone == '') {
			isValidForm = false
			messageText = languageTranslation("mobile_number_error_sub_header_text")
		}
		else if (state == '') {
			isValidForm = false
			messageText = languageTranslation("state_error_sub_header_test")
		}
		else if (city == '') {
			isValidForm = false
			messageText = languageTranslation("city_validation_message")
		}
		else if (pincode == '') {
			isValidForm = false
			messageText = languageTranslation("pin_code_error_sub_header_test")
		}
		else if (address == '') {
			isValidForm = false
			messageText = languageTranslation("address_validation_message")
		}
		if (isValidForm) {
			let request = {}
			request.email_address = email
			request.first_name = firstName
			request.last_name = lastName
			request.phone_number = phone
			request.country = country.value
			request.email_address = email
			request.state = state
			request.city = city
			request.zip_code = pincode
			request.address_line1 = address
			if(imageFile!=null){
			request.image= imageFile.data
			}
			request.profile_complete= !stateUser.userData.profile_complete
			dispatch(profileCompleteAction(request, navigation))
		}
		else {
			AlertHelper.warning(messageText);
		}
	}
	return (
		<View style={styles.flex1}>

			<Organisms.Header isTab _onLeftAction={() => { navigation.goBack() }} title={languageTranslation('profile_heading_text')} />
			<ScrollView style={styles.bodyContainer} scrollEnabled={scrollEnabled}>
				{/* <View style={styles.bodyContainer} > */}
				<View style={styles.topContainer} >
					<TouchableOpacity style={styles.imgBox}
						onPress={() => { setModalVisible(true) }}>
						<Image source={imageFile !== null ? { uri: imageFile.uri } : userImage !== null ? { uri: userImage } :  resources.USER_IMG} style={styles.img} />

						<TouchableOpacity
							onPress={() => { setModalVisible(true) }}
							style={styles.imgContainer} >
							<Icon name={'image-edit'} style={styles.imgIcon} />

						</TouchableOpacity>
					</TouchableOpacity>
					<Text>{fullName}</Text>
				</View>
				<View style={styles.container}>

					<Molecules.InputField
						title={languageTranslation('first_name_label_text')}
						placeholder={languageTranslation('first_name_placeholder')}
						value={firstName}
						onChangeText={(text) => setFirstName(text)}
					/>

					<Molecules.InputField
						title={languageTranslation('last_name_label_text')}
						placeholder={languageTranslation('last_name_placeholder')}
						value={lastName}
						onChangeText={(text) => setLastName(text)} />

					<View style={styles.dropdown}>
						<Text style={styles.lableText}>{languageTranslation('country_label_text')}</Text>

						<Molecules.Dropdown
							setShowList={() => { setScrollEnabled(!scrollEnabled) }}
							selectedValue={country}
							data={countryList}
							placeholder={languageTranslation('country_placeholder')}
							value={country}
							inputContainerStyle={styles.dropInputContainer}
							placeholderStyle={styles.placeholderStyle}
							iconStyle={styles.dropdownIcon}
							listStyle={styles.listStyle}
							mainContainer={styles.dropdownContainer}
							onChangeText={item => { setCountry(item) , console.log('item=====',item)}} 
							/>

					</View>
					<Molecules.InputField
						title={languageTranslation('email_label_text')}
						placeholder={languageTranslation('email_placeholder')}
						value={email}
						keyboardType={'email-address'}
						onChangeText={(text) => setEmail(text)} />

					<Molecules.InputField
						title={languageTranslation('mobile_number_label_text')}
						placeholder={languageTranslation('mobile_number_placeholder')}
						keyboardType={'number-pad'}
						value={phone}
						onChangeText={(text) => setPhone(text)}
					/>

					<Molecules.InputField
						title={languageTranslation('state_label_text')}
						placeholder={languageTranslation('state_placeholder')}
						value={state}
						onChangeText={(text) => setState(text)}
					/>

					<Molecules.InputField
						title={languageTranslation('city_label_text')}
						placeholder={languageTranslation('city_placeholder')}
						value={city}
						onChangeText={(text) => setCity(text)}
					/>

					<Molecules.InputField
						title={languageTranslation('pin_code_label_text')}
						placeholder={languageTranslation('pin_code_placeholder')}
						keyboardType={'number-pad'}
						value={pincode}
						onChangeText={(text) => setPincode(text)}
					/>

					<View style={styles.addressContainer}>
						<Text style={styles.lableText}>{languageTranslation('address_label_text')}</Text>
						<Atoms.TextInput
							title={languageTranslation('address_label_text')}
							placeholder={languageTranslation('address_placeholder')}
							value={address}
							textFieldStyle={styles.addressbar}
							multiline={true}
							onChangeText={(text) => setAddress(text)}
						/>
					</View>
					

				</View>
				{/* </View> */}
				<Atoms.Loader
				loading={stateGlobal.userLoader}
				/>
			</ScrollView>
			<TouchableOpacity
						style={styles.button}
						onPress={() => { do_authantication() }}>
						<Text style={styles.textButton}>{languageTranslation('save_button_text')}</Text>
					</TouchableOpacity>
			<Molecules.ImagePicker isVisible={modalVisible} chooseCameraImage={() => { setModalVisible(false), chooseCameraImage() }} onRequestClose={() => { setModalVisible(false) }}
				chooseGalleryImage={() => { setModalVisible(false), chooseGalleryImage() }}
				onDelete={() => { setIsDelete(!isDelete), setModalVisible(false) }} />
		</View>

	);
};

export default ProfileCompleteScreen;
