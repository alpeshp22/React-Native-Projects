import React, { useState } from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView, Switch,
	ImageBackground,
} from 'react-native';
import styles from './ProfileScreenStyle';
import * as Molecules from '../../Components/molecules';
import * as resources from 'resources';
import * as Atoms from '../../Components/atoms';
import * as Organisms from '../../Components/organisms';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';
import { useSelector, useDispatch } from 'react-redux';
import { updateProfileAction } from '../../store/user/actions';
import { AlertHelper } from '../../Constants/AlertHelper';
import { updateProfilIemage } from '../../store/user/actions';
import * as Validate from '../../Constants/validation';
import { color } from '../../Constants/Color';
import { Rating } from 'react-native-ratings';
import { getTranslatedValue } from '../../Constants/translation';

const ProfileScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const [fullName, setFullName] = React.useState('');
	const [phone, setPhone] = useState('');
	const [userImage, setUserImage] = useState(null);
	const [address, setAddress] = useState('');
	const [Verified, setVerified] = useState('');
	const [email, setEmail] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [modalVisible, setModalVisible] = useState(false)
	const [scrollEnabled, setScrollEnabled] = React.useState(false);
	const [isEdit, setIsEdit] = React.useState(null);
	const [available, setAvailable] = React.useState(null);
	const [isEditPhone, setIsEditPhone] = React.useState(null);
	const [isFoucs, setIsFocus] = React.useState(false);
	const [isEditAddress, setIsEditAddress] = React.useState(false);
	const [isEditEmail, setIsEditEmail] = React.useState(false);
	const [headerTitle, setHeaderTitle] = React.useState('Profile');

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/profile_page',
			placeholder,
		);
	}
	const languageTranslation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/registration_page',
			placeholder,
		);
	}
	React.useEffect(() => {
		const unsubscribe = navigation.addListener('focus', (e) => {

			console.log('stateUser.userData', stateUser.userData)
			if (stateUser.userData != null) {
				_setUpdateValue(stateUser.userData);
			}
		});
		return unsubscribe;
	});

	React.useEffect(() => {
		if (stateUser.userData != null) {
			_setUpdateValue(stateUser.userData);
		}
	}, [stateUser]);

	const _goNextAfterEdit = (index) => {
		this.inputRefs[index + 1].focus()
	}

	const _setUpdateValue = (userData) => {
		setFullName(userData.full_name != null ? userData.full_name : '');
		setEmail(userData.email_address != null ? userData.email_address : '');
		setPhone(userData.phone_number != null ? userData.phone_number : '');
		setAvailable(userData.availability != null ? userData.availability:false);
		if (userData.address_line1 != null) {
			let address = '';
			if (userData.address) {
				address = userData.address;
			}
			if (userData.address_line1) {
				if (address.length === 0) {
					address = userData.address_line1;
				} else {
					address = address.concat(`\n`);
					address = address.concat(userData.address_line1);
				}
			}
			if (userData.zip_code) {
				if (address.length === 0) {
					address = userData.zip_code;
				} else {
					address = address.concat(`\n`);
					address = address.concat(userData.zip_code);
				}
			}
			if (userData.city) {
				if (address.length === 0) {
					address = userData.state;
				} else {
					address = address.concat(`\n`);
					address = address.concat(userData.state);
				}
			}
			if (userData.city) {
				if (address.length === 0) {
					address = userData.city;
				} else {
					address = address.concat(`\n`);
					address = address.concat(userData.city);
				}
			}
			if (userData.country) {
				if (address.length === 0) {
					address = userData.country;
				} else {
					address = address.concat(`\n`);
					address = address.concat(userData.country.country_name);
				}
			} setAddress(address)
		}
		setUserImage(stateUser.userData.image != null ? stateUser.userData.image : null);
		setImageFile(null)

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
			if (response.data != undefined) {

				setImageFile(response)
				validateImage(response.data)
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
			if (response.data != undefined) {
				setImageFile(response)
				validateImage(response.data)
			}
		})
	}
	const validateImage = (image) => {
		console.log('ImageFile', imageFile)
		console.log('image', image)
		if (image != undefined) {
			let request = {}
			request.image = image
			dispatch(updateProfilIemage(request, navigation))
		}
	}


	const emailvalidate = () => {
		let isValidForm = true;
		let messageText = '';
		setIsEditEmail(!isEditEmail)
		if (email == '') {
			isValidForm = false
			messageText = translation("email_address_error_sub_header_text")
		}
		else if (Validate.isValidEmail(email) === false) {
			isValidForm = false
			messageText = translation ("email_format_validation_message")
		}
		if (isValidForm) {
			let request = {}
			request.email_address = email
			dispatch(updateProfileAction(request, navigation))
		}
		else {
			AlertHelper.warning(messageText);
		}
	}

	const phoneValidate = () => {
		let isValidForm = true;
		let messageText = '';
		if (phone == '') {
			isValidForm = false
			messageText = translation("mobile_number_error_sub_header_text")
		}
		else if (Validate.isValidPhoneNumber(phone) === false) {
			isValidForm = false
			messageText = translation("mobile_number_validation_message")

		}
		if (isValidForm) {
			setIsEdit(!isEdit)
			let request = {}
			request.phone_number = phone
			dispatch(updateProfileAction(request, navigation))
		}
		else {
			AlertHelper.warning(messageText);
		}
	}
	const OnAvailabilityChange = (value) => {
		// setAvailable(value)
		let request={}
		request.availability= value;
		dispatch(updateProfileAction(request,navigation))
	}

	return (
		<View style={styles.flex1}>
			<Organisms.Header
				_onLeftAction={() => {
					navigation.goBack();
				}}
			title={translation('profile_heading_text')}
			/>
			<ScrollView>
				<View style={styles.container}>
					<View style={styles.topContainer} >
						<TouchableOpacity style={styles.imgBox}
							onPress={() => { setModalVisible(true) }}>
							<Image source={imageFile !== null ? { uri: imageFile.uri } : userImage !== null ? { uri: userImage } : resources.USER_IMG} style={styles.img} />
							<TouchableOpacity
								onPress={() => { setModalVisible(true) }}
								style={styles.imgContainer} >
								<Icon1 name={'image-edit'} style={styles.imgIcon} />
							</TouchableOpacity>
						</TouchableOpacity>
						<View style={styles.ratingView} >

						<Text style={styles.userText}>{fullName}</Text>
						
							<Icon2 name={'star'} style={styles.starIcon} />
							<Text style={styles.ratingText}>{'(4.0)'}</Text>
						</View>
						<View style={styles.balanceView} >
						{/* <Text style={styles.walletText}>{'Balance :'}</Text> */}
						<Text style={styles.walletText}>{' 35 €'}</Text>
						</View>

					</View>

					<View style={styles.infoContainer}>
						<View style={styles.addressContainer}>
							<Text style={styles.inputText} >{translation('address_label_text')}</Text>
						</View>
						<View style={styles.passwordContainer}>
							<View style={styles.inputGroup}>
								<Text style={styles.inputTxt1} >{address}</Text>
							</View>
							{!isEditAddress && (
								<TouchableOpacity onPress={() => { navigation.navigate('AddressEdit') }} >
									<Icon name={'edit-3'} style={styles.editIcon} />
								</TouchableOpacity>
							)}
						</View>
						<Text style={styles.labelTxt2}>{translation('telephone_number_label_text')}</Text>
						<View style={styles.passwordContainer}>
							<View style={styles.inputGroup}>
								{isEdit === true ?
									<TextInput
										style={styles.inputTxt}
										keyboardType={'number-pad'}
										placeholder={translation('telephone_number_placeholder')}
										editable={isEdit}
										autoFocus={true}
										onBlur={() => { phoneValidate() }}
										value={phone}
										onChangeText={(text) => setPhone(text)}
									/>
									:
									<Text style={styles.inputTxt1} >{phone}</Text>
								}
							</View>
							{!isEdit && (
								<TouchableOpacity onPress={() => { setIsEdit(!isEdit) }} style={styles.iconBtn} >
									<Icon name={'edit-3'} style={styles.editIcon} />
								</TouchableOpacity>
							)}
						</View>

						<Text style={styles.labelTxt2}>{translation('email_placeholder')}</Text>
						<View style={styles.passwordContainer}>
							<View style={styles.inputGroup}>
								<TextInput
									style={styles.inputTxt}
									placeholder={translation('email_placeholder')}
									editable={isEditEmail}
									value={email}
									keyboardType={'email-address'}
									onBlur={() => { emailvalidate() }}
									onChangeText={(text) => setEmail(text)}
								/>
							</View>
							{!isEditEmail && (
								<TouchableOpacity onPress={() => { setIsEditEmail(!isEditEmail) }} style={styles.iconBtn} >
									<Icon name={'edit-3'} style={styles.editIcon} />
								</TouchableOpacity>
							)}
						</View>
						<View>
							<Text style={styles.inputText}>{translation('verified_label_text')}</Text>
							<View style={styles.verificationContainer}>
								<Text style={styles.inputTxt1} >{available != true ? translation('unavailability_label_text') : translation('availability_label_text')}</Text>

				{/* <Atoms.Switch value={available} onPress={() => setAvailable(!available)}style={styles.switch} /> */}
								<Switch value={available} onValueChange={(value) => { OnAvailabilityChange(value) }} style={styles.switch}
									trackColor={{ false: color.inactiveTrackColor, true: color.activeTrackColor, }}
									thumbColor={available ? color.activeThumbColor : color.inactiveThumbColor}
								//  ios_backgroundColor="#3e3e3e"
								/>
							</View>
							{/* <View style={styles.bottomView}>
						  <Text style={styles.inputTxt2}>{''}</Text>
					   </View>	 */}
						</View>
						<View>
							<Text style={styles.inputText}>{translation('id_verification_label_text')}</Text>
							<View style={styles.verificationContainer}>
								<Text style={styles.inputTxt1} >{translation('id_verification_placeholder')}</Text>
								<TouchableOpacity onPress={() => { navigation.navigate('IdVerification') }}  >
									<Icon name={'check-square'} style={styles.editIcon1} />
								</TouchableOpacity>
							</View>
							{/* <View>
								<Text style={styles.inputText}>{'Credit To Account'}</Text>
								<View style={styles.verificationContainer}>
									<Text style={styles.inputTxt1} >{'40 €'}</Text>
								</View>
							</View> */}
							<View style={styles.bottomView}>
								<Text style={styles.inputTxt2}>{translation('id_verification_input_text')}</Text>
							</View>

						</View>

					</View>


				</View>
			</ScrollView>
			<Atoms.Loader loading={stateGlobal.userLoader} />

			<Molecules.ImagePicker isVisible={modalVisible} chooseCameraImage={() => { setModalVisible(false), chooseCameraImage() }} onRequestClose={() => { setModalVisible(false) }}
				chooseGalleryImage={() => { setModalVisible(false), chooseGalleryImage() }}
				onDelete={() => { setIsDelete(!isDelete), setModalVisible(false) }} />
		</View>
	);
};

export default ProfileScreen;