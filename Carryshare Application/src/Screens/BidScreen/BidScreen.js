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
  TouchableWithoutFeedback,
  RefreshControl,
} from 'react-native';
import styles from './BidScreenStyle';
import * as Organisms from '../../Components/organisms';
import * as Atoms from '../../Components/atoms';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Tab } from 'react-native-elements';
import { getTranslatedValue } from '../../Constants/translation';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import Icon5 from 'react-native-vector-icons/Ionicons';
// import {getBookingListAction,getBookingDetailAction} from '../../store/booking/actions'
const BidScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const productUser = useSelector((state) => state.product);
	const stateGlobal = useSelector((state) => state.global);

  const [scrollEnabled, setScrollEnabled] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [headerTitle, setHeaderTitle] = React.useState('Home');
  const [tabData, setTabData] = React.useState([{ name: 'Avi', status: 0, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '5 km', date: '10.03.2021 ,10.10AM', price: 13 }, { name: 'Om', status: 0, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '50 km', date: '29.04.2021 ,10.10AM', price: 13 }, { name: 'Ami', status: 0, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '10 km', date: '15.05.2021 ,10.10AM', price: 10 }]);
  const [tabData1, setTabData1] = React.useState([{ name: 'Shree', status: 1, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '6 km', date: '10.04.2021 ,10.10AM', price: 13 }, { name: 'Steve', status: 1, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '51 km', date: '18.04.2021 ,10.10AM', price: 15 }]);
  const [tabData2, setTabData2] = React.useState([{ name: 'Avinash', status: 1, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '10 km', date: '15.05.2021 ,10.10AM', price: 13 }, { name: 'Shiv', status: 1, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '15 km', date: '19.05.2021 ,10.10AM', price: 18 }]);
  const [tabData3, setTabData3] = React.useState([{ name: 'Abhi', status: 2, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '52 km', date: '18.02.2021 ,10.10AM', price: 13 }, { name: 'Avi', status: 2, sourceDetail: { address: 'C.G.Road' }, destinationDetail: { address: 'S.G Highway' }, category: { title: 'Furniture Shifting' }, distance: '55 km', date: '17.02.2021 ,10.10AM', price: 10 }]);

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


  const _onClick = (item) => {
    // navigation.navigate('BookingDetail');
    // let request={}
    // request.booking_id = 1;//item.id
    // dispatch(getBookingDetailAction(request,navigation));
  }


  const _renderFlatList = ({ item, index }) => {
    let status = ''
    if (item.status === 0) {
      status = 'Pending'
    }
    else if (item.status === 1) {
      status = 'Booked'
    }
    else if (item.status === 2) {
      status = "Complete"
    }

    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => { _onClick() }}>
        <View style={styles.bodyContainer}>
          <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
            {/* <Icon3 name="calendar-check-o" style={styles.iconBooking} /> */}
            {/* <View style={[styles.book,item.status===0?styles.pending:item.status===1?styles.booked:item.status===2?styles.completed:{}]}>
            <Text style={[styles.statusText]}>{status}</Text>
          </View> */}
          </View>
          <View style={styles.bodyContainer2} >
            <View style={styles.destinationView}>
              <View style={styles.destination} >
                <Icon name="location" style={styles.icon} />
                {/* <Text style={styles.pickup}>{'Destination'}</Text> */}

                <Text style={styles.pickupPoint}>{item.sourceDetail.address}</Text>
                <Icon4 name="arrow-swap" style={styles.iconLocation} />
                <Text style={styles.pickupPoint}>{item.destinationDetail.address}</Text>
              </View>
              <View style={styles.distance}>
                <Icon3 name="map-marker-path" style={styles.iconDistance} />
                <Text style={styles.pickupPoint}>{item.distance}</Text>
              </View>
            </View>
            <View style={styles.services}>
              <Icon2 name="truck" style={styles.iconTruck} />
              <Text style={styles.serviceText1}>{item.category.title}</Text>
            </View>
            <View style={styles.rowDate}>
              <View style={styles.dateView}>
                <Icon name="calendar" style={styles.iconCalender} />
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <View style={styles.dateView}>
                {/* <Icon2 name="dollar-sign" style={styles.iconDollar} /> */}
                <Icon5 name="pricetags-outline" style={styles.iconTruck} />
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.priceTag}>{'€'}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const doRefresh = () => { };
  return (
    <>
      <Organisms.Header isTab={true} title={translation('bid_heading_text')} />
      {/* <Tab value={currentTab} onChange={(currentTab) => setCurrentTab(currentTab)}   >
  <Tab.Item title="Pending" value = {1}  />
  <Tab.Item title="Awaited" value={2}/>
  <Tab.Item title="Rejected" value={3} />
</Tab> */}
      <Atoms.Tab
        currentTab={currentTab}
        titleList={[translation('pending_label_text'), translation('awaited_label_text'), translation('rejected_label_text')]}
        tabPress={(currentTab) => setCurrentTab(currentTab)}
      />
      <View style={[styles.flatListContainer]}>
        {currentTab === 0 && (
          <>
            {tabData.length > 0 ? (
              <FlatList
                data={tabData}
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
            {tabData1.length > 0 ? (
              <FlatList
                data={tabData1}
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
        {currentTab === 2 && (
          <>
            {tabData2.length > 0 ? (
              <FlatList
                data={tabData2}
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

export default BidScreen;
