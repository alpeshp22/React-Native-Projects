import React from 'react';
import {View, TouchableOpacity, Text } from 'react-native';
import styles from './LeaveCardStyles';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


export const LeaveCard = (props) => {

const { duration,  status,name, leaveType,containerStyle,applyDate,startDate,endDate} = props;

	return (
		<>
		<View style={[styles.attendanceContainer,containerStyle]}>
			<View style={styles.attendanceCardMain}>
				<View style={styles.attendanceCardTitle}>
					<Text style={styles.attendanceCardStyle}>{applyDate}</Text>
					<Text style={styles.statusText}>{status}</Text>

				</View>
				<View style={styles.attendanceInOut}>
				<View style={styles.attendanceInOutInner}>
						<Text style={styles.attendanceInOutTitle}>{'Name :'}</Text>
						<Text style={styles.attendanceInOutTime}>{name}</Text>
					</View>
					<View style={styles.attendanceInOutInner}>
						<Text style={styles.attendanceInOutTitle}>{'Type :'}</Text>
						<Text style={styles.attendanceInOutTime}>{leaveType}</Text>
					</View>
					
				</View>
				<View style={styles.attendanceInOut}>
					<View style={styles.attendanceInOutInner}>
						<Text style={styles.attendanceInOutTitle}>{'From:'}</Text>
						<Text style={styles.attendanceInOutTime}>{startDate}</Text>
					</View>
					<View style={styles.attendanceInOutInner}>
						<Text style={styles.attendanceInOutTitle}>{'To:'}</Text>
						<Text style={styles.attendanceInOutTime}>{endDate}</Text>
					</View>
				</View>
				
				<View style={styles.attendanceInOut}>
				<View style={styles.attendanceInOutInner}>
						<Text style={styles.attendanceInOutTitle}>{'Total Day :'}</Text>
						<Text style={styles.attendanceInOutTime}>{duration}</Text>
				</View>
				</View>
				<View style={styles.iconView}>
					<Icon name="chevron-right" style={styles.iconStyle}/>
				</View>
			</View>
			
		</View>
			
		</>

	);

}





export default LeaveCard;
