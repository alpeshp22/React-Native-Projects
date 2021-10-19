import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
  ScrollView,
  ImageBackground,
  TouchableWithoutFeedback,
  RefreshControl,
} from 'react-native';
import styles from './HomeScreenStyles';
import * as Organisms from '../../Components/organisms';
import * as Atoms from '../../Components/atoms';
import {useSelector, useDispatch} from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Feather';
import {SwipeListView} from 'react-native-swipe-list-view';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Fontisto';
import { getTranslatedValue } from '../../Constants/translation';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import {getBookingListAction,getBookingDetailAction} from '../../store/booking/actions'
const CreactOrderScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const productUser = useSelector((state) => state.product);
	const stateGlobal = useSelector((state) => state.global);

  const [scrollEnabled, setScrollEnabled] = React.useState(false);
  const [currentTab, setCurrentTab] = React.useState(0);
  const [headerTitle, setHeaderTitle] = React.useState('Home');
  const [tabData, setTabData] = React.useState([{name:'Avi',status:0,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13}, {name:'Avi',status:0,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13}, {name:'Avi',status:0,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13}]);
  const [tabData1, setTabData1] = React.useState([{name:'Avi',status:1,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13},{name:'Avi',status:1,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13}]);
  const [tabData2, setTabData2] = React.useState([{name:'Avi',status:1,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13},{name:'Avi',status:1,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13}]);
  const [tabData3, setTabData3] = React.useState([{name:'Avi',status:2,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13},{name:'Avi',status:2,sourceDetail:{address:'C.G.Road'},destinationDetail:{address:'S.G Highway'},category:{title:'Furniture Shifting'},date:'10 march 2021 ,10.10AM',price:13}]);

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

const _onClick=(item) =>{
  navigation.navigate('BookingDetail');
  // let request={}
  // request.booking_id = 1;//item.id
    // dispatch(getBookingDetailAction(request,navigation));
  }
  const _renderHiddenItem=(item, index)=>{
		return (
      <View style={styles.rowBack}>
			<TouchableOpacity
				style={styles.acceptBtn}
				onPress={() => _accept(item)}>
				<Icon3 name={'check-bold'}  style={styles.acceptText}/>
			</TouchableOpacity>
		   <TouchableOpacity
		   style={styles.cancelBtn}
		   onPress={() => _cancel(item)}>
			   <Icon3 name={'close-thick'} style={styles.cancelText}/>
		 </TouchableOpacity>
		 </View>
		  // <TouchableOpacity
			// style={styles.rowBack}
			// onPress={() => _deleteNotification(item)}>
			// <Icon2 name="trash-2" style={styles.imgDeleteIcon} />
		  // </TouchableOpacity>
		);
	  }
    const _renderHiddenItemCancel=(item, index)=>{
      return (
        <View style={styles.rowBack}>
       
         <TouchableOpacity
         style={styles.cancelBtn}
         onPress={() => _cancel(item)}>
           <Icon3 name={'close-thick'} style={styles.cancelText}/>
       </TouchableOpacity>
       </View>
        // <TouchableOpacity
        // style={styles.rowBack}
        // onPress={() => _deleteNotification(item)}>
        // <Icon2 name="trash-2" style={styles.imgDeleteIcon} />
        // </TouchableOpacity>
      );
      }
    const _accept = params => {
      Alert.alert(translation2('trip_accept_title_text'),
      translation2('logout_modal_description_text'),
        [ { text:translation2('exit_app_modal_cancel_button_text'), onPress: () => {}, style: "cancel" },
          { text: translation2('exit_app_modal_ok_button_text'), onPress: () => {
          }
        }],
        { cancelable: false }
        );
      };
      
      const _cancel = params => {
      	Alert.alert(translation2('trip_cancel_title_text'),
		translation2('logout_modal_description_text'),
			[ { text:translation2('exit_app_modal_cancel_button_text'), onPress: () => {}, style: "cancel" },
			  { text: translation2('exit_app_modal_ok_button_text'), onPress: () => {
            }
          }],
          { cancelable: false }
          );
        };
  const _renderFlatList = ({item, index}) => {
	 let  status=''
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
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {_onClick()  }}>
        <View style={styles.bodyContainer}>
          <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
            {/* <Icon3 name="calendar-check-o" style={styles.iconBooking} /> */}
            <View style={[styles.book,item.status===0?styles.pending:item.status===1?styles.booked:item.status===2?styles.completed:{}]}>
            <Text style={[styles.statusText]}>{status}</Text>
          </View>
          </View>
          <View style={styles.bodyContainer2} >
          <View style={styles.destination}>
          <Icon name="location"  style={styles.icon} />
            {/* <Text style={styles.pickup}>{'Destination'}</Text> */}
            
            <Text style={styles.pickupPoint}>{item.sourceDetail.address}</Text>
            <Icon4 name="arrow-swap" style={styles.iconLocation} />
            <Text style={styles.pickupPoint}>{item.destinationDetail.address}</Text>
          </View>
          <View style={styles.services}>
            <Icon2 name="truck" style={styles.iconTruck} />
            {/* <Text style={styles.serviceText}>{'Service'}</Text> */}
            {/* <Text style={styles.serviceText1}>{': '+ 'Furniture Shifting'}</Text> */}
            <Text style={styles.serviceText1}>{item.category.title}</Text>
          </View>
          <View style={styles.rowDate}>
            <View style={styles.dateView}>
          <Icon name="calendar" style={styles.iconCalender} />
            <Text style={styles.date}>{item.date}</Text>
            </View>
            {/* <Icon2 name="dollar-sign" style={styles.iconDollar} /> */}
            	<View style={styles.iconRow}>
            <Text style={styles.price}>{item.price}</Text>
							<Text style={styles.priceTag}>{'€'}</Text>
              </View>
          </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const doRefresh = () => {};
  return (
    <>
      <Organisms.Header isTab={true} title={translation('home_heading_text')} 
			_onRightAction={()=> {navigation.navigate('NotificationList')}} rightIconName={'bell'} iconRightStyle={styles.iconRightStyle} iconStyle={styles.iconStyle}/>
      <Atoms.Tab
        currentTab={currentTab}
        titleList={[translation('unassigned_label_text'), translation('today_label_text'), translation('future_label_text'), translation('completed_label_text')]}
        tabPress={(currentTab) => setCurrentTab(currentTab)}
      />
      <View style={[styles.flatListContainer]}>
        {currentTab === 0 && (
          <>
            {tabData.length > 0 ? (
               <SwipeListView
               data={tabData}
               disableRightSwipe
               renderItem={_renderFlatList}
               renderHiddenItem={({item, index}) =>
                 _renderHiddenItem(item, index)
               }
               leftOpenValue={0}
               rightOpenValue={-wp(29)}
             />
              // <FlatList
              //   data={tabData}
              //   renderItem={_renderFlatList}
              //   horizontal={false}
              //   showsHorizontalScrollIndicator={false}
              //   showsVerticalScrollIndicator={false}
              //   style={styles.serviceFlatList}
              //   refreshControl={
              //     <RefreshControl refreshing={false} onRefresh={doRefresh} />
              //   }
              // />
            ) : (
              <Atoms.EmptyRecord />
            )}
          </>
        )}
        {currentTab === 1 && (
          <>
            {tabData1.length > 0 ? (
               <SwipeListView
               data={tabData1}
               disableRightSwipe
               renderItem={_renderFlatList}
               renderHiddenItem={({item, index}) =>
                 _renderHiddenItemCancel(item, index)
               }
               leftOpenValue={0}
               rightOpenValue={-55}
             />
              // <FlatList
              //   data={tabData1}
              //   renderItem={_renderFlatList}
              //   horizontal={false}
              //   showsHorizontalScrollIndicator={false}
              //   showsVerticalScrollIndicator={false}
              //   style={styles.serviceFlatList}
              //   refreshControl={
              //     <RefreshControl refreshing={false} onRefresh={doRefresh} />
              //   }
              // />
            ) : (
              <Atoms.EmptyRecord />
            )}
          </>
        )}
        {currentTab === 2 && (
          <>
            {tabData2.length > 0 ? (
               <SwipeListView
               data={tabData2}
               disableRightSwipe
               renderItem={_renderFlatList}
               renderHiddenItem={({item, index}) =>
               _renderHiddenItemCancel(item, index)
               }
               leftOpenValue={0}
               rightOpenValue={-55}
             />
              // <FlatList
              //   data={tabData2}
              //   renderItem={_renderFlatList}
              //   horizontal={false}
              //   showsHorizontalScrollIndicator={false}
              //   showsVerticalScrollIndicator={false}
              //   style={styles.serviceFlatList}
              //   refreshControl={
              //     <RefreshControl refreshing={false} onRefresh={doRefresh} />
              //   }
              // />
            ) : (
              <Atoms.EmptyRecord />
            )}
          </>
        )}
        {currentTab === 3 && (
          <>
            {tabData3.length > 0 ? (
              <FlatList
                data={tabData3}
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
