import React, { Component, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, SectionList, Alert, ScrollView, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./NotificationSettingScreenStyle";
import Icon from "react-native-vector-icons/Feather";
import * as Atoms from '../../Components/atoms';
import { NotificationCard } from "molecules";
import { getNotificationsListAction, deleteNotificationAction, markAsReadNotificationAction } from '../../store/notification';
import {updateUserLanguageAction} from '../../store/user';
import {changeLanguageAction,setCurrentLanguage} from '../../store/global';
import { SwipeListView } from 'react-native-swipe-list-view';
import LinearGradient from 'react-native-linear-gradient';
import { color } from "../../Constants/Color";
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import { getTranslatedValue } from '../../Constants/translation';

const NotificationSettingScreen = ({ navigation }) => {
	const [refresh, setRefresh] = React.useState(false)
	const [data, setData] = React.useState([{
		"id": 0,
		"user_id": 1,
		"value": true,
		"sub": "sub",
		"icon": "user",
		"title": "Created Your Booking!",
		"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
	}, {
		"id": 1,
		"user_id": 1,
		"value": true,
		"sub": "sub",
		"icon": "user",
		"title": "Created Your Booking!",
		"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
	}, {
		"id": 3,
		"value": true,
		"user_id": 1,
		"icon": "user",
		"sub": "sub",
		"title": "Created Your Booking!",
		"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
	},])
	const [data1, setData1] = React.useState([{
		"id": 0,
		"user_id": 1,
		"value": true,
		"sub": "sub",
		"icon": "user",
		"title": "Created Your Booking!",
		"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
	}, {
		"id": 1,
		"user_id": 1,
		"value": true,
		"sub": "sub",
		"icon": "user",
		"title": "Created Your Booking!",
		"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
	}, {
		"id": 3,
		"value": true,
		"user_id": 1,
		"icon": "user",
		"sub": "sub",
		"title": "Created Your Booking!",
		"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
	},])
	const [languageList, setLanguageList] = useState([])
	const [selectedLanguage, setSelectedLanguage] = useState({});
	// const [languageList, setLanguageList] = useState([{ label: 'English', value: 1 }, { label: 'Deutsch', value: 2 },])
	const [scrollEnabled, setScrollEnabled] = useState(true);
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);

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
	React.useEffect(() => {
		let focusListener = navigation.addListener('focus', () => {
			setSelectedLanguage(stateGlobal.currentLanguage)
			
			console.log('Object.keys(allLanguage)',Object.keys(stateGlobal.configData.languages))
			console.log('Object.keys()',stateGlobal.configData.languages)
			console.log('currentLanguage',stateGlobal.currentLanguage)
			// for (i = 0; i < stateGlobal.configData.languages.length; i++) {


			// }
			// if (stateGlobal.configData != null && stateGlobal.configData != undefined) {
			// 	let categories = [];
			// 	stateGlobal.configData.languages.map((value,key) => {
			// 		let obj = {};
			// 		obj.label = value;
			// 		obj.value = key;
			// 		categories.push(obj);

			// 	});
				// setLanguageList(stateGlobal.configData.languages)


			// }
			setLanguageList(Object.keys(stateGlobal.configData.languages))
		});
		return focusListener;
	});

	const _onclick = (item, index) => {
		let newData = data;

		newData[index].value = !newData[index].value;
		console.log('value', newData)
		setData(newData);
		setRefresh(!refresh)

	};
	const _onclick1 = (item, index) => {
		let newData = data1;

		newData[index].value = !newData[index].value;
		console.log('value', newData)
		setData1(newData);
		setRefresh(!refresh)

	};
	const _onSelect = (item, index) => {
		setSelectedLanguage(item)
	setShow(!show);
	let request={}
	request.language_code=item;
	dispatch(changeLanguageAction(request));
	dispatch(updateUserLanguageAction(request,navigation));
	}

	const _renderFlatList = ({ item, index }) => {
		return (
			<View  >
				<Molecules.DoubleViewSwitch
					title={item.title}
					subtitle={item.sub}
					isON={item.value}
					iconName={item.icon ? item.icon : 'lock'}
					// description={'description'}
					// descriptionLink={"value.descriptionLink"}
					onDescriptionLinkPress={() => { }}
					onClick={(isON) => { _onclick(item, index) }} />


			</View>

		);
	}
	const _renderFlatList1 = ({ item, index }) => {
		console.log('item', item)
		return (
			<View  >
				<Molecules.DoubleViewSwitch
					title={item.title}
					subtitle={item.sub}
					isON={item.value}
					iconName={item.icon ? item.icon : 'lock'}
					// description={'description'}
					// descriptionLink={"value.descriptionLink"}
					onDescriptionLinkPress={() => { }}
					onClick={(isON) => { _onclick1(item, index) }} />


			</View>

		);
	}



	return (
		<View style={[styles.container,]}>
			<Organisms.Header _onLeftAction={() => { navigation.goBack() }} title={translation('app_header_text')} />

			<ScrollView style={[styles.ListContainer]} scrollEnabled={scrollEnabled} bounces={false}>

				<Atoms.Title title={translation('language_selection_title_text')} style={{}} />
				<View style={styles.row}>
					<View style={styles.lockIconView}>
						<Icon name="globe" style={styles.lockIcon} />
					</View>
					<TouchableOpacity style={styles.row1} onPress={()=>{setShow(!show)}}>
						<Text  style={styles.titleTxt} >{stateGlobal.configData.languages[selectedLanguage]}</Text>
						<Icon name="chevron-down" style={styles.lockIcon} />
						
					</TouchableOpacity>
					
				</View>
				{show && (
								<>
									{languageList.map((item) => {
										return (
											<TouchableOpacity  style={styles.dropdownItems} onPress={()=>{_onSelect(item)}} >
												<Text style={styles.lableTxt}>{stateGlobal.configData.languages[item]}</Text>
											{selectedLanguage!==undefined&&	selectedLanguage===item&&
											<Icon name="check" style={styles.checkIcon} />}
											</TouchableOpacity>)
									}

									)}
								</>
							)
						}
				<View >
					<Atoms.Title title={translation('push_notifications_label_text')} style={{}} />
				</View>
				<FlatList
					data={data}
					renderItem={_renderFlatList}
					horizontal={false}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					style={styles.serviceFlatList}
					refreshing={refresh}
				/>

				<View>
					<Atoms.Title title={translation('email_notifications_label_text')} style={styles.emailView} />
				</View>
				<FlatList
					data={data1}
					renderItem={_renderFlatList1}
					horizontal={false}
					showsHorizontalScrollIndicator={false}
					showsVerticalScrollIndicator={false}
					style={styles.serviceFlatList2}
					refreshing={refresh}
				/>
				{/* <Atoms.Loader loading={stateGlobal.loading}  /> */}
			</ScrollView>

		</View>
	);

}


export default NotificationSettingScreen;

