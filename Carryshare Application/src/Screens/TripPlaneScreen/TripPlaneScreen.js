import React from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	Platform,
	FlatList,
	Dimensions,
} from 'react-native';
import styles from './TripPlaneScreenStyle';
import * as Atoms from '../../Components/atoms';
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { theme } from "../../Constants/Theme";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { AlertHelper } from '../../Constants/AlertHelper';
import { mackTripAction } from '../../store/booking/actions';
import { getTranslatedValue } from '../../Constants/translation';
import { Slider } from 'react-native-elements';
import { color } from "../../Constants/Color";

// var Slider = require('react-native-slider');
const commentDateFormate = 'YYYY-MM-DD';
const commentTimeFormate = "hh:mm A";



const TripPlaneScreen = ({ navigation }) => {
	const WIDTH = Dimensions.get('window').width;
	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);
	const [headerTitle, setHeaderTitle] = React.useState('');
	const [source, setsource] = React.useState('');
	const [sourceDetail, setsourceDetail] = React.useState({});
	const [destination, setDestination] = React.useState('');
	const [destinationDetail, setDestinationDetail] = React.useState({});
	const [vacantSpace, setVacantSpace] = React.useState('');
	const [root, setRoot] = React.useState('');
	const [startDate, setStartDate] = React.useState('');
	const [startTime, setStartTime] = React.useState('');
	const _searchInputRef = React.useRef('');
	const _destinationRef = React.useRef('');
	const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
	const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
	const [googleMapAdd, setGoogleMapAdd] = React.useState('');
	const [range, setRange] = React.useState(5);
	const [longitude, setLongitude] = React.useState('');
	const [days, setDays] = React.useState([{ title: 'Monday', isselected: false }, { title: 'Tuesday', isselected: false }, { title: 'Wednesday', isselected: false }, { title: 'Thursday', isselected: false }, { title: 'Friday', isselected: false }, { title: 'Saturday', isselected: false }, { title: 'Sunday', isselected: false },]);
	const [isRegulear, setIsRegulear] = React.useState(false);
	const [refresh, setRefresh] = React.useState(false);

	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			"app/trip_page",
			placeholder,
		);
	}
	const showTimePicker = () => {
		setTimePickerVisibility(true);
	};

	const hideTimePicker = () => {
		setTimePickerVisibility(false);
	};

	const handleTimeConfirm = (date) => {
		console.log("A time has been picked: ", moment.utc(date).local().format(commentDateFormate), date);
		setStartTime(moment.utc(date).local().format(commentTimeFormate))
		hideTimePicker();
	};

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (date) => {
		console.log("A date has been picked: ", moment.utc(date).local().format(commentDateFormate));

		setStartDate(moment.utc(date).local().format(commentDateFormate))
		console.log('startDate++', startDate)
		console.log('todaydate++', moment().format(commentDateFormate))
		hideDatePicker();
	};

	const do_authantication = () => {
		let isValid = true
		let message = ''
		var currentDate = moment().format(commentDateFormate)
		// console.log('moment(startDate)',startDate)
		// console.log('moment(currentDate', currentDate)
		// console.log('moment(currentDate).isAfter(startDate)++++',moment(startDate).isBefore(currentDate))
		// console.log('example, false',moment('2019-05-12').isBefore('2019-05-11'))

		if (source === '') {
			isValid = false
			message = translation('source_error_sub_header_text')
		}
		else if (startDate === '') {
			isValid = false
			message = translation("trip_start_date_error_sub_header_text")
		}
		else if(moment(startDate).isBefore(currentDate) === true){
			isValid = false
			message = translation("invalid_trip_start_date_error_sub_header_text")
		}
		else if (startTime === '') {
			isValid = false
			message = translation("trip_start_time_error_sub_header_text")
		}
		else if (destination === '') {
			isValid = false
			message = translation("destination_error_sub_header_text")

		}
		else if (vacantSpace === '') {
			isValid = false
			message = translation("available_space_error_sub_header_text")

		}

		if (isValid) {
			// navigation.navigate('Home')
			let data = days.filter((item) => item.isselected == true);
			let availability = []
			for (let i = 0; i < data.length; i++) {
				availability.push(data[i].title)
			}
			let request = {}
			request.source = sourceDetail
			request.start_date = startDate
			request.start_time = startTime
			request.destination = destinationDetail
			request.available_space = vacantSpace
			request.root = root
			request.radius = Math.floor(range)
			request.availability = availability
			dispatch(mackTripAction(request, navigation))
		}
		else {
			AlertHelper.warning(message);
		}
	}
	const _onClick = (item, index) => {
		console.log("item,index", item, index)
		let data = days
		data[index].isselected = !data[index].isselected;
		setDays(data)
		setRefresh(!refresh)
	}

	const _renderFlatList = ({ item, index }) => {
		return (
			<TouchableOpacity style={styles.dayBox} onPress={() => { _onClick(item, index) }}>
				<Text style={styles.dayTitle}>{item.title}</Text>
				{item.isselected == true ? <Icon style={styles.dayChecked} name='check-decagram' /> : <></>}

			</TouchableOpacity>
		);
	}


	return (
		<View style={styles.flex1}>

			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('trip_heading_text')} />

			<View style={styles.mainContainer}>
				<KeyboardAwareScrollView
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps={'handled'}
					enableOnAndroid={true}
					extraScrollHeight={Platform.OS === 'ios' ? 50 : 50}
					style={styles.container}>
					<View style={styles.inputRow}>
						<Text style={[styles.inputTitle]}>{translation("source_label_text")}</Text>
						<GooglePlacesAutocomplete
							minLength={2}
							placeholder={translation("google_search_placeholder")}
							//returnKeyType={'Search'}
							keyboardShouldPersistTaps={'handled'}
							ref={_searchInputRef}
							listViewDisplayed={true}
							query={{
								key: 'AIzaSyAYE6Y7IgBJgX4C1qvrhC4eoeDBbA1ZOQc',
								language: 'en', // language of the results
								region: 'IN', //administrative_area_level_3
								location: '23.033863, 72.585022',
								types: [
									'sublocality_level_2',
									'sublocality_level_1',
									'route',
									'locality',
								],
							}}
							fetchDetails={true}
							onPress={(data, details = null) => {
								let flagLandmark = false;
								let googleAddress = details.address_components;
								setGoogleMapAdd(details.formatted_address);
								setsource(details.formatted_address);
								console.log(googleAddress, "==googleAddress");
								let startPoint = {}
								startPoint.source_address = details.formatted_address
								console.log('details.geometry.location+++++++++---', details.geometry.location)
								console.log(startPoint, "==startPoint");
								if (details.geometry.location != undefined) {
									startPoint.source_latitude = details.geometry.location.lat
									startPoint.source_longitude = details.geometry.location.lng
								}
								setsourceDetail(startPoint)
							}}

							onFail={error => console.log("google error", error)}
							styles={{
								textInputContainer: {
									backgroundColor: 'rgba(0,0,0,0)',
									borderTopWidth: 0,
									borderBottomWidth: 0,
									width: WIDTH - 30,
									marginBottom: 0,

								},
								textInput: {
									marginTop: 0,
									marginLeft: 0,
									marginRight: 0,
									Minheight: 48,
									color: '#5d5d5d',
									fontSize: 16,
									borderRadius: 5,
									borderWidth: 1,
									borderColor: theme.PRIMARY_BORDER_COLOR,
								},
								predefinedPlacesDescription: {
									color: '#1faadb',
								},
							}}
							placeholderTextColor="#008ec3"

						/>

					</View>
					<View style={styles.inputRow2}>
						<Text style={[styles.inputTitle]}>{translation('trip_start_date_label_text')}</Text>
						<TouchableOpacity style={styles.inputBox} onPress={showDatePicker} >
							<Text style={startTime === '' ? styles.datePlaceHolderTxt : styles.dateTxt} >{startDate === '' ? translation('select_start_date_placeholder') : startDate}</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.inputRow}>
						<Text style={[styles.inputTitle]}>{translation('trip_start_time_label_text')}</Text>
						<TouchableOpacity style={styles.inputBox} onPress={showTimePicker} >
							<Text style={startTime === '' ? styles.datePlaceHolderTxt : styles.dateTxt} >{startTime === '' ?translation('select_start_time_placeholder') : startTime}</Text>
						</TouchableOpacity>
					</View>

					<View style={styles.inputRow}>
						<Text style={[styles.inputTitle]}>{translation("destination_label_text")}</Text>
						<GooglePlacesAutocomplete
							minLength={2}
							placeholder={translation("google_search_placeholder")}
							//returnKeyType={'Search'}
							keyboardShouldPersistTaps={'handled'}
							ref={_destinationRef}
							listViewDisplayed={true}
							query={{
								key: 'AIzaSyAYE6Y7IgBJgX4C1qvrhC4eoeDBbA1ZOQc',
								language: 'en', // language of the results
								region: 'IN', //administrative_area_level_3
								location: '23.033863, 72.585022',
								types: [
									'sublocality_level_2',
									'sublocality_level_1',
									'route',
									'locality',
								],
							}}
							fetchDetails={true}
							onPress={(data, details = null) => {
								let flagLandmark = false;
								let googleAddress = details.address_components;
								setGoogleMapAdd(details.formatted_address);
								setDestination(details.formatted_address)
								let endPoint = {}
								endPoint.destination_address = details.formatted_address
								if (details.geometry.location != undefined) {
									endPoint.destination_latitude = details.geometry.location.lat
									endPoint.destination_longitude = details.geometry.location.lng
								}
								setDestinationDetail(endPoint)


							}}

							onFail={error => console.log("google error", error)}
							styles={{
								textInputContainer: {
									backgroundColor: 'rgba(0,0,0,0)',
									borderTopWidth: 0,
									borderBottomWidth: 0,
									width: WIDTH - 30,
									marginBottom: 0,

								},
								textInput: {
									marginTop: 0,
									marginLeft: 0,
									marginRight: 0,
									Minheight: 48,
									color: '#5d5d5d',
									fontSize: 16,
									borderRadius: 5,
									borderWidth: 1,
									borderColor: theme.PRIMARY_BORDER_COLOR,

								},
								predefinedPlacesDescription: {
									color: '#1faadb',
								},
							}}

						/>

					</View>
					<Molecules.InputField title={translation('available_space_label_text')} inputContainerStyle={styles.inputField} placeholder={translation('enter_vacant_space_detail_placeholder')} value={vacantSpace} onChangeText={(text) => setVacantSpace(text)} />
					<Molecules.InputField title={translation('root_label_text')} inputContainerStyle={styles.inputField} placeholder={translation('enter_root_detail_placeholder')} value={root} onChangeText={(text) => setRoot(text)} />
					<View style={styles.inputRow}>
						<Text style={[styles.sliderTitle]}>{translation('select_your_pick_up_radius_label_text')}</Text>
						<Slider
							value={range}
							onValueChange={(value) => setRange(value)}
							maximumTrackTintColor={'#b7b7b7'}
							minimumTrackTintColor={color._emeraldgreen}
							thumbStyle={{ height: 25, width: 25, }}
							maximumValue={50}
							minimumValue={5}
							thumbTintColor={color._WHITE}
						/>
						<Text style={[styles.sliderValue]}>{Math.floor(range)}</Text>
					</View>
					<View style={styles.inputRow}>
						<Text style={[styles.inputTitle]}>{translation('are_you_frequent_traveller_label_text')}</Text>
						<Atoms.RadioButton
							title={translation('regular_label_text')}
							status={isRegulear === true ? 'checked' : 'unchecked'}
							value={isRegulear}
							onPress={() => setIsRegulear(!isRegulear)}
							type={1}
							containerStyle={styles.radioBtnContainer}
							unCheckedIconStyle={styles.radioBtnUnchecked}
							checkedIconStyle={styles.radioBtnchecked}
							textStyle={styles.radioBtnTxt}
						/>
					</View>
					{isRegulear && (
						<FlatList
							data={days}
							renderItem={_renderFlatList}
							style={{ margin: 5 }}
							numColumns={2}
							columnWrapperStyle={styles.columnWrapperStyle}
							refreshing={refresh}
						/>
					)}
					<TouchableOpacity
						style={styles.button}
						onPress={() => { do_authantication() }}>
						<Text style={styles.text}>{translation('submit_button_text')}</Text>
					</TouchableOpacity>

					<DateTimePickerModal
						isVisible={isDatePickerVisible}
						mode="date"
						onConfirm={handleConfirm}
						onCancel={hideDatePicker}
						minimumDate={new Date()}
					/>
					<DateTimePickerModal
						isVisible={isTimePickerVisible}
						mode='time'
						onConfirm={handleTimeConfirm}
						onCancel={hideTimePicker}
					/>
				</KeyboardAwareScrollView>
			</View>

		</View>

	);
};

export default TripPlaneScreen;
