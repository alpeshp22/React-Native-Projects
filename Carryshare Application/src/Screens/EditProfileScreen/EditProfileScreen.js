import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import styles from './EditProfileScreenStyle';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import * as Atoms from '../../Components/atoms';
import * as resources from 'resources';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Icon from 'react-native-vector-icons/Feather';
import { getTranslatedValue } from '../../Constants/translation';
import { useSelector, useDispatch } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { updateProfilIemage, logoutAction } from '../../store/user/actions';

const SettingsScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateUser = useSelector((state) => state.user);
	const stateGlobal = useSelector((state) => state.global);
	const [modalVisible, setModalVisible] = useState(false);
	const [fullName, setFullName] = React.useState('');
	const [userImage, setUserImage] = useState(null);
	const [imageFile, setImageFile] = useState(null);
	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/settings_page',
			placeholder,
		);
	}
	const translation2 = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/global',
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

	const _logOut = params => {
		Alert.alert(translation2('logout_modal_title_text'),
		translation2('logout_modal_description_text'),
			[{ text: translation2('logout_modal_cancel_button_text'), onPress: () => { }, style: "cancel" },
			{
				text:translation2('exit_app_modal_ok_button_text'), onPress: () => {
					dispatch(logoutAction(navigation))
				}
			}],
			{ cancelable: false }
		);
	};

	const _setUpdateValue = (userData) => {
		setFullName(userData.full_name != null ? userData.full_name : '');
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

	const _onRightAction = () => {

	}
	return (
		<View style={styles.flex1}>
			<Organisms.Header isTab title={translation('setting_heading_text')} titleStyle={styles.titleStyle} iconRightStyle={styles.iconRightStyle} iconStyle={styles.iconStyle} _onRightAction={() => { _logOut() }} rightIconName={'logout'} />

			<ScrollView style={styles.bodyContainer} >
				<View style={styles.topContainer} >
					<TouchableOpacity style={styles.imgBox}
						onPress={() => { setModalVisible(true) }}>
						{/* <Image source={imageFile !== null ? { uri: imageFile.uri } : resources.USER_IMG} style={styles.img} /> */}
						<Image source={imageFile !== null ? { uri: imageFile.uri } : userImage !== null ? { uri: userImage } : resources.USER_IMG} style={styles.img} />
						<TouchableOpacity
							onPress={() => { setModalVisible(true) }}
							style={styles.imgContainer} >
							<Icon name={'image-edit'} style={styles.imgIcon} />

						</TouchableOpacity>

					</TouchableOpacity>
					<Text>{fullName}</Text>
				</View>
				<Molecules.OptionRow
					leftIcon={'user'}
					title={translation('profile_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('Profile') }}
				/>
				<Molecules.OptionRow
					leftIcon={'truck'}
					title={translation('gallery_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('Gallery') }}
				/>
				<Molecules.OptionRow
					leftIcon={'truck'}
					title={translation('document_list_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('DocumentList') }}
				/>
				<Molecules.OptionRow
					leftIcon={'bell'}
					title={translation('notification_setting_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('NotificationSetting') }}
				/>
				<Molecules.OptionRow
					leftIcon={'truck'}
					title={translation('make_a_trip_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('TripPlane') }}
				/>

				<Molecules.OptionRow
					leftIcon={'lock'}
					title={translation('security_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('Security') }}
				/>
				<Molecules.OptionRow
					leftIcon={'truck'}
					title={translation('welcome_menu_text')}
					containerStyle={styles.rowItemStyle}
					iconStyle={styles.rowItemIcon}
					titleStyle={styles.rowTitleStyle}
					iconColLeft={styles.iconColLeftBg}
					rightIconStyle={styles.rowRightIconCol}
					onPress={() => { navigation.navigate('Welcome') }}
				/>

				<Atoms.Loader loading={stateGlobal.userLoader} />

			</ScrollView>
			<Molecules.ImagePicker isVisible={modalVisible} chooseCameraImage={() => { setModalVisible(false), chooseCameraImage() }} onRequestClose={() => { setModalVisible(false) }}
				chooseGalleryImage={() => { setModalVisible(false), chooseGalleryImage() }}
				onDelete={() => { setIsDelete(!isDelete), setModalVisible(false) }} />
		</View>
	);
};

export default SettingsScreen;
