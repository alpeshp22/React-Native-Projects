import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import styles from './IdVerificationScreenStyle';
import * as resources from 'resources';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import * as Atoms from '../../Components/atoms';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import PageControl from 'react-native-page-control';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import ImagePicker from 'react-native-image-picker';
import { documentStoreAction } from '../../store/user/actions';
import { getTranslatedValue } from '../../Constants/translation';
import { AlertHelper } from '../../Constants/AlertHelper';
// const commentDateFormate = 'MMM DD, YYYY';
const commentDateFormate = 'DD.MM.YYYY';

const commentTimeFormate = "hh:mm A";


const IdVerificationScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);
	const flatListRef = React.useRef('');
	const [currentIndex,setCurrentIndex] = React.useState(0);
	const [expireDate, setExpireDate] = React.useState('');
	const [documantId, setDocumantId] = React.useState('');
	const [modalVisible, setModalVisible] = useState(false)
	const [refreshing, setrefreshing] = useState(false)
	const [images, setImages] = React.useState(null);
	const [selectedIndex, setSelectedIndex] = useState(null);
	const [imageFile, setImageFile] = useState(null)
	const [multipleDocument, setMultipleDocument] = useState([{ id: 1, data: null }, { id: 2, data: null }])
	const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
	const [nationality, setNationality] = useState(null);
	const [nationalityList, setNationalityList] = useState([])
	const [documentList, setDocumentList] = useState([])
	const [selectedDocument, setSelectedDocument] = useState(null);
	// const [documentList, setDocumentList] = useState([{ label: 'Licence', value: 1 },	{ label: 'RC Book', value: 2 },])
	const [scrollEnabled, setScrollEnabled] = useState(true);

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/id_verification_page',
			placeholder,
		);
	}


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
				setNationalityList(country)
				console.log('stateGlobal', stateGlobal.configData)
				let doc=[];
				stateGlobal.configData.document_type.map((value) => {
					let obj = {};
					obj.label = value.title;
					obj.value = value.id;;
					doc.push(obj);
				});
				setDocumentList(doc)

			}
		});
		return focusListener;
	});




	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};
	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};
	const handleConfirm = (date) => {
		console.log("A date has been picked: ", moment.utc(date).local().format(commentDateFormate), date);
		setExpireDate(moment.utc(date).local().format(commentDateFormate))
		hideDatePicker();
	};
	 function onScrollEnd(e) {
		let contentOffset = e.nativeEvent.contentOffset;
		let viewSize = e.nativeEvent.layoutMeasurement;

		// Divide the horizontal offset by the width of the view to see which page is visible
		let Index = Math.floor(contentOffset.x / viewSize.width);
		setCurrentIndex(Index)
		// this.setState({
		// 	currentIndex,
		// });
	}
	const chooseGalleryImage = () => {
		const options = {
			title: 'Pick documant image',
			storageOptions: {
				skipBackup: true,
				path: 'images',
				noData: true
			},
		};
		ImagePicker.launchImageLibrary(options, (image) => {
		const elementsIndex = selectedIndex
		if(image.data!=undefined){
			let imageData = [...multipleDocument];
			imageData[elementsIndex] = { ...imageData[elementsIndex], data: image }
			setMultipleDocument(imageData)
			setrefreshing(!refreshing)
		}
		});
	}
	const chooseCameraImage = () => {
		const options = {
			mediaType: 'photo',
			includeBase64: false,
			maxHeight: 200,
			maxWidth: 200,
		}

		ImagePicker.launchCamera(options, (image) => {
		if(image.data!=undefined){
			const elementsIndex = selectedIndex
			let imageData = [...multipleDocument];
			imageData[elementsIndex] = { ...imageData[elementsIndex], data: image }
			setMultipleDocument(imageData)
			setrefreshing(!refreshing)
		}
	}
		)
	}
	const _onDelete = (elementsIndex) => {
		let imageData = [...multipleDocument];
		imageData[elementsIndex] = { ...imageData[elementsIndex], data: null }
		setMultipleDocument(imageData)
		setrefreshing(!refreshing)
	}
	const _renderItem = (item, index) => {
		let imagPath = item.data !== null ? item.data.path : '';
		return (
			<TouchableOpacity style={styles.imageContainer} disabled={imagPath !== '' ? true : false} onPress={() => { setModalVisible(true), setSelectedIndex(index) }}>
				{imagPath !== '' ?
					<TouchableOpacity style={styles.imgDelete} onPress={() => { _onDelete(index) }}>
						<Icon name="trash-2" style={styles.imgDeleteIcon} />
					</TouchableOpacity> : <></>}
				<Image style={styles.imageStyle} source={imagPath !== '' ? { uri: item.data.uri } : resources.CAMERA_PLACEHOLDER} resizeMode='cover' />
			</TouchableOpacity>
		);
	}
	const do_authantication = () => {
		let isValidForm = true;
		let messageText = '';
		let currentDay = moment().format(commentDateFormate)

		 if (selectedDocument == null) {
			isValidForm = false
			messageText = translation('document_type_error_sub_header_text')
		}
		else if (nationality == null) {
			isValidForm = false
			messageText =translation( 'nationality_error_sub_header_text')
		}
		
		else if (documantId == '') {
			isValidForm = false
			messageText = translation ('document_id_error_sub_header_text')
		}
		// else if (documantId == ''){
		// 	isValidForm = false
		// 	messageText = "please enter valid document id"
		// }
		else if (expireDate == '') {
			isValidForm = false
			messageText = translation('expire_date_error_sub_header_text')
		}
		else if (moment(expireDate).isBefore(currentDay) == true) {
			isValidForm = false
			messageText = translation('invalid_expire_date_error_sub_header_text')

		}
		else if (multipleDocument[0].data ===null||multipleDocument[1].data === null) {
			isValidForm = false
			messageText = translation('image_error_sub_header_text')
		}
		if (isValidForm){
			let request = {}
			let multiImages = []
				for (let i = 0; i < multipleDocument.length; i++) {
					multiImages.push(multipleDocument[i].data.data)
				}
			request.doc_number = documantId
			request.type = selectedDocument.value
			request.country = nationality.value
			request.expiry_date = expireDate
			request.images= multiImages
			// request.type ="national_id",
			
			dispatch(documentStoreAction(request, navigation))
			
			// navigation.navigate('Home');
		}
		else {
			AlertHelper.warning(messageText);
		}
		

	}
	return (
		<View style={styles.flex1}>

			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('id_verification_heading_text')} />
			{/* translation('id_verification_heading_text') */}
			<ScrollView style={styles.Container}  scrollEnabled={scrollEnabled}>
				<View  >
					{multipleDocument.length > 0 && (
						<View style={styles.topContainer}>
							<FlatList
								ref={flatListRef}
								data={multipleDocument}
								horizontal={true}
								renderItem={({ item, index }) => _renderItem(item, index)}
								pagingEnabled
								onMomentumScrollEnd={onScrollEnd}
								extraData={multipleDocument}
								showsHorizontalScrollIndicator={false}
								refreshing={refreshing}
								key={multipleDocument.length}
							/>
						
						</View>)}
						<PageControl
										style={{ marginTop: 10 }}
										numberOfPages={multipleDocument.length}
										currentPage={currentIndex}
										hidesForSinglePage
										pageIndicatorTintColor="#747474"
										currentPageIndicatorTintColor="#000000"
										indicatorStyle={{ borderRadius: 10 }}
										currentIndicatorStyle={{ borderRadius: 10 }}
										indicatorSize={{ width: 10, height: 10 }}
										onPageIndicatorPress={i => {
											flatListRef.current.scrollToIndex({index:i})
											setCurrentIndex(i);
										}}
									/>
				</View>
				<View style={styles.dropdowncontainer}>
					<Text style={styles.lableText}>{translation('document_type_label_text')}</Text>
					<Molecules.Dropdown
					setShowList={() => { setScrollEnabled(!scrollEnabled) }}
						selectedValue={selectedDocument}
						data={documentList}
						placeholder={translation('document_type_placeholder')}
						value={selectedDocument}
						inputContainerStyle={styles.dropInputContainer}
						placeholderStyle={styles.placeholderStyle}
						iconStyle={styles.dropdownIcon}
						onChangeText={item => { setSelectedDocument(item) }} />
				</View>

				<View style={[styles.dropdowncontainer,styles.dropdowncontainer2]}>
					<Text style={styles.lableText}>{translation('nationality_label_text')}</Text>
					<Molecules.Dropdown
					setShowList={() => { setScrollEnabled(!scrollEnabled) }}
						selectedValue={nationality}
						data={nationalityList}
						placeholder={translation('nationality_placeholder')}
						value={nationality}
						inputContainerStyle={styles.dropInputContainer}
						placeholderStyle={styles.placeholderStyle}
						iconStyle={styles.dropdownIcon}
						onChangeText={item => { setNationality(item) }} />
				</View>
				
				<View>
				<Text style={styles.lableText}>{translation('document_id_label_text')}</Text>

				<Molecules.InputField 
				// title={'DocumantId'} 
						inputContainerStyle={styles.inputField} 
						placeholder={translation('document_id_placeholder')}
						value={documantId} 
				 		onChangeText={(text) => setDocumantId(text)} />
						 </View>
				<View style={styles.inputRow}>
					<Text style={[styles.inputTitle]}>{translation('expire_date_label_text')}</Text>
					<TouchableOpacity style={styles.inputBox} onPress={showDatePicker} >
						<Text style={expireDate === '' ? styles.datePlaceHolderTxt : styles.dateTxt} >{expireDate === '' ? translation('select_expire_date_placeholder') : expireDate}</Text>
					</TouchableOpacity>
				</View>
				<Atoms.Button title={translation('upload_button_text')} style={styles.buttonUpload} onPress={()=>{do_authantication()}} />
			</ScrollView>
			<DateTimePickerModal
				isVisible={isDatePickerVisible}
				mode="date"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
				minimumDate={new Date()}
			/>
			<Molecules.ImagePicker isVisible={modalVisible} chooseCameraImage={() => { setModalVisible(false), chooseCameraImage() }} onRequestClose={() => { setModalVisible(false) }}
				chooseGalleryImage={() => { setModalVisible(false), chooseGalleryImage() }}
				onDelete={() => { setIsDelete(!isDelete), setModalVisible(false) }} />
		</View>
	)
}
export default IdVerificationScreen;