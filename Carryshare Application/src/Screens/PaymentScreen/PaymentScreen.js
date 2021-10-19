import React from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList,
	ScrollView,
	ImageBackground,
	RefreshControl,
	TouchableWithoutFeedback,
} from 'react-native';
import styles from './PaymentScreenStyle';
import * as resources from 'resources';
import * as Atoms from '../../Components/atoms';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Fontisto';
import * as Organisms from '../../Components/organisms';
import { getTranslatedValue } from '../../Constants/translation';

import { useSelector, useDispatch } from 'react-redux';

const CreactOrderScreen = ({ navigation }) => {
	const dispatch = useDispatch();
	const productUser = useSelector((state) => state.product);
	const stateGlobal = useSelector((state) => state.global);

	const [scrollEnabled, setScrollEnabled] = React.useState(false);
	const [currentTab, setCurrentTab] = React.useState(0);
	const [completeData, setCompleteData] = React.useState([{ id: '14552', status: 2, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, date: '10.01.2021 ,10.20AM', price: 23 },
	{ id: '14785', status: 2, sourceDetail: { address: 'Panchvati' }, destinationDetail: { address: 'S.G Highway' }, date: '10.02.2021 ,10.10AM', price: 13 },
	{ id: '14985', status: 2, sourceDetail: { address: 'Home' }, destinationDetail: { address: 'S.G Highway' }, date: '15.03.2021 ,10.30AM', price: 30 }]);
	const [pendingData, setPendingData] = React.useState([{ id: '15654', status: 0, sourceDetail: { address: 'Ramol' }, destinationDetail: { address: 'S.G Highway' }, date: '15.05.2021 ,10.10AM', price: 13 },
	{ id: '15585', status: 0, sourceDetail: { address: 'Gota' }, destinationDetail: { address: 'S.G Highway' }, date: '18.05.2021 ,10.30AM', price: 30 }]);
	const [headerTitle, setHeaderTitle] = React.useState('Payment');
	const translation = (placeholder) => {
		const translation = stateGlobal.translation;
		const currentLanguage = stateGlobal.currentLanguage;
		return getTranslatedValue(
			currentLanguage,
			translation,
			'app/home_page',
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
	const _renderFlatList = ({ item, index }) => {
		let status = ''
		if(item.status===0){
			status=translation2('pending_status_label_text')
		}
		else if(item.status===1){
		  status=translation2('Booked_status_label_text')
		}
		else if(item.status===2){
			status=translation2("complete_status_label_text")
		}
		return (
			<TouchableOpacity activeOpacity={1}
				onPress={() => {
					navigation.navigate('BookingDetail');
				}}>
				<View style={styles.flatListView}>
					<View style={[styles.row, styles.topRow]}>
						<View style={styles.idView}>
							{/* <Text style={styles.titleTxt} >{'Order Id'}</Text> */}
							<Icon2 name="hash" style={styles.orderIcon} />

							{/* <Text style={styles.txt}>{': ' + '14785'}</Text> */}
							<Text style={styles.txt}>{item.id}</Text>
						</View>
						<View style={[styles.book, item.status === 0 ? styles.pending : item.status === 1 ? styles.booked : item.status === 2 ? styles.completed : {}]}>
							<Text style={[styles.statusText]}>{status}</Text>
						</View>
					</View>
					<View style={styles.destination}>
						<Icon name="location" style={styles.iconLocation2} />
						{/* <Text style={styles.pickupPoint}>{':' + ' C.G.Road'}</Text> */}
						<Text style={styles.pickupPoint}>{item.sourceDetail.address}</Text>
						<Icon4 name="arrow-swap" style={styles.iconLocation} />
						<Text style={styles.pickupPoint}>{item.destinationDetail.address}</Text>
					</View>
					<View style={styles.rowTime}>
						<View style={styles.iconRow}>
							<Icon name="calendar" style={styles.iconCalender} />
							<Text style={styles.dateTxt}>{item.date}</Text>
						</View>
						<View style={styles.iconRow}>

							{/* <Icon4 name="euro" style={styles.iconDollar} /> */}

							<Text style={styles.price}>{item.price}</Text>
							<Text style={styles.priceTag}>{'€'}</Text>

						</View>
					</View>
				</View>
			</TouchableOpacity>
		);
	};

	const doRefresh = () => { };

	return (
		<>
			<Organisms.Header isTab={true} title={translation('payment_heading_text')} />
			<Atoms.Tab
				currentTab={currentTab}
				titleList={[translation('completed_label_text'), translation('pending_label_text')]}
				tabPress={(currentTab) => setCurrentTab(currentTab)}
			/>
			<View style={[styles.flatListContainer]}>
				{/* <FlatList data={completeData} renderItem={_flatListRender} /> */}
				{currentTab === 0 && (
					<>
						{completeData.length > 0 ? (
							<FlatList
								data={completeData}
								renderItem={_renderFlatList}
								horizontal={false}
								showsHorizontalScrollIndicator={false}
								showsVerticalScrollIndicator={false}
								style={styles.serviceFlatList}
								refreshControl={
									<RefreshControl refreshing={false} onRefresh={doRefresh} />
								}
							/>
						) : (
							<Atoms.EmptyRecord />
						)}
					</>
				)}
				{currentTab === 1 && (
					<>
						{pendingData.length > 0 ? (
							<FlatList
								data={pendingData}
								renderItem={_renderFlatList}
								horizontal={false}
								showsHorizontalScrollIndicator={false}
								showsVerticalScrollIndicator={false}
								style={styles.serviceFlatList}
								refreshControl={
									<RefreshControl refreshing={false} onRefresh={doRefresh} />
								}
							/>
						) : (
							<Atoms.EmptyRecord />
						)}
					</>
				)}
			</View>
		</>
	);
};

export default CreactOrderScreen;
