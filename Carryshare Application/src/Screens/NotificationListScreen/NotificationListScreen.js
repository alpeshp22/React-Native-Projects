import React, { Component, useRef, useState } from "react";
import { View, Text, Image, TouchableOpacity, SectionList, Alert, RefreshControl } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import styles from "./NotificationListScreenStyle";
import Icon from "react-native-vector-icons/Feather";
import * as Atoms from '../../Components/atoms';
import {NotificationCard } from "molecules";
import {getNotificationsListAction,deleteNotificationAction,markAsReadNotificationAction} from '../../store/notification';
import {SwipeListView} from 'react-native-swipe-list-view';
import LinearGradient from 'react-native-linear-gradient';
import { color } from "../../Constants/Color";
import * as Organisms from '../../Components/organisms';
import * as Molecules from '../../Components/molecules';
import { getTranslatedValue } from '../../Constants/translation';

const NotificationListScreen = ({ navigation }) => {
	const [notificationList, setNotificationList] = React.useState([ 
		{
		"title": "09 Dec, 2020",
		"data": [
			{
				"id": 5,
				"user_id": 1,
				"user_type": "customer",
				"title": "Created Your Booking!",
				"description": "There is new booking created by your account for service Shave, Beard & Mustache.",
				"data": {
					"notification_type": "new_booking_notification_to_customer",
					"booking_id": 2
				},
				"is_read": 1,
				"created_at": "2020-12-09T06:11:47.000000Z",
				"updated_at": "2020-12-10T06:43:17.000000Z",
				"notification_type": "new_booking_notification_to_customer"
			},
			{
				"id": 8,
				"user_id": 1,
				"user_type": "customer",
				"title": "Booking Cancelled!",
				"description": "You cancelled your booked service Normal Haircut.",
				"data": {
					"notification_type": "customer_booking_cancelled_notification_to_customer",
					"booking_id": 1
				},
				"is_read": 1,
				"created_at": "2020-12-09T06:31:00.000000Z",
				"updated_at": "2020-12-10T06:43:21.000000Z",
				"notification_type": "customer_booking_cancelled_notification_to_customer"
			},
			{
				"id": 8,
				"user_id": 1,
				"user_type": "customer",
				"title": "Booking Cancelled!",
				"description": "You cancelled your booked service Normal Haircut.",
				"data": {
					"notification_type": "customer_booking_cancelled_notification_to_customer",
					"booking_id": 1
				},
				"is_read": 0,
				"created_at": "2020-12-09T06:31:00.000000Z",
				"updated_at": "2020-12-10T06:43:21.000000Z",
				"notification_type": "customer_booking_cancelled_notification_to_customer"
			}
		]
	},
	{
		"title": "10 Dec, 2020",
		"data": [
			{
				"id": 13,
				"user_id": 0,
				"user_type": "customer",
				"title": "Created Your Booking!",
				"description": "There is new booking created by your account for service Bath Fitting.",
				"data": {
					"notification_type": "new_booking_notification_to_customer",
					"booking_id": 4
				},
				"is_read": 0,
				"created_at": "2020-12-10T05:36:19.000000Z",
				"updated_at": "2020-12-10T06:43:01.000000Z",
				"notification_type": "new_booking_notification_to_customer"
			},
		
		]
	}
]);
	// const stateNotifications = useSelector((state) => state.notification);
	const dispatch = useDispatch();
	const stateGlobal = useSelector((state) => state.global);

	// React.useEffect(() => {
	// 	if (stateNotifications.list.length > 0 ) {
	// 		setNotificationList(stateNotifications.list)
	// 	}
		 
	// },[stateNotifications.list]);
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
		let focusListener = navigation.addListener('focus', () => {
		});
		return focusListener;
  });

  const doRefresh = () => {
	  
  };
  const _gotoNotificationDetails = item => {
	
    if(item.is_read === 0)
    {   let requestRead={}
	requestRead.notification_id=item.id
    //   dispatch(markAsReadNotificationAction(requestRead))  
	}
	let request={}
	request.booking_id=item.data.booking_id;
    //   dispatch(getBookingDetailAction(request,navigation))
   

   };
  
   const _gotoDetail = (item) => {
};

  const _renderSwipebleList=(item, index) =>{
	let mydata = [item];
    return (
      <SwipeListView
        data={mydata}
        disableRightSwipe
        renderItem={() =>
          _renderNotificationItem(item, index)
        }
        renderHiddenItem={({item, index}) =>
          _renderHiddenItem(item, index)
        }
        leftOpenValue={0}
        rightOpenValue={-55}
      />
    );
  }

	
	const _deleteNotification = params => {
		Alert.alert(translation2('notification_modal_title_text'),
		translation2('logout_modal_description_text'),
			[ { text:translation2('exit_app_modal_cancel_button_text'), onPress: () => {}, style: "cancel" },
			  { text: translation2('exit_app_modal_ok_button_text'), onPress: () => {
		
				//    dispatch(deleteNotificationAction({notification_id:params.id}))
				}
			}],
			{ cancelable: false }
		  );
	  };
	const _renderHiddenItem=(item, index)=>{
		return (
		  <TouchableOpacity
			style={styles.rowBack}
			onPress={() => _deleteNotification(item)}>
			<Icon name="trash-2" style={styles.imgDeleteIcon} />
		  </TouchableOpacity>
		);
	  }
	const _renderNotificationItem = ( item, index ) => {
		return (
			<>
			<Molecules.NotificationCard
				description={item.description}
				// dateTime={'4 min '}
				title={item.title}
				isRead={item.is_read}
				onPress={() => { _gotoNotificationDetails(item)}}
			/>
				
			</>

		);
	}

	return (
		<View style={[styles.container, ]}>
			<Organisms.Header _onLeftAction={() => {navigation.goBack() }} title={translation('notifications_heading_text')} />
			<View style={[styles.ListContainer]}>
			{notificationList.length > 0 ? (
				<>
				<SectionList
            sections={notificationList}
            stickySectionHeadersEnabled={true}
            keyExtractor={(item, index) => item + index}
            renderItem={({item, index}) =>
              _renderSwipebleList(item, index)
            }
            renderSectionHeader={({section: {title}}) => (
				<LinearGradient colors={[color._f0f8fb, color._f0f8fb, color._f0f8fb,]} style={[Platform.OS === 'ios'? {height: 52}:{height:50}, {marginBottom:10}]}>
				<View style={[styles.linearGradient]}>
				  <Text style={styles.dateHeader}>{title}</Text>
				</View>
				</LinearGradient>
            )}
            // refreshControl={
			// 	<RefreshControl
	    	//         //   refreshing={stateNotifications.loading}
            //           onRefresh={doRefresh}
            //         />
            //       }
                  
          />
				
				
				
				
				
				
			</>	):(
					<Atoms.EmptyRecord />
				)}
			</View>
			
		</View>
	);

}


export default NotificationListScreen;

