import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './SalaryCardStyles';
import { connect } from 'react-redux';
import { color } from '../../../Constants/Color';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export const NotificationCard = (props) => {
	const {
		salary,
		imageLeft,
		EmpId,
		status,
		designation,
		name,
		containerStyle,
		imgStyle,
	} = props;
	return (
		<TouchableOpacity
			onPress={() => { }}
			activeOpacity={1}
			style={[styles.mainContainer, containerStyle]}>
			<View style={styles.listRow}>
				<View style={styles.assignListContainer}>
					<View style={styles.col1}>
						{imageLeft && (
							<View style={[styles.imageContainer]}>
								<Image source={imageLeft} style={[styles.userImg, imgStyle]} />
							</View>
						)}
					</View>
					<View style={styles.col2}>
						<View style={styles.rowContainer}>
							<View style={styles.rowContainerInner}>
							<Text style={styles.rowContainerTitle}>{'Emp.Id :'}</Text>
								<Text style={styles.titleTxt}>{EmpId}</Text>
							</View>
							<View style={styles.rowContainerInner}>
								<TouchableOpacity
									style={styles.iconView}
									onPress={() => props.onPress()}>
									<Icon name="eye" style={styles.iconStyle} />
								</TouchableOpacity>
							</View>
						</View>
						<View style={styles.rowContainer}>
							<View style={styles.rowContainerInner}>
							<Text style={styles.rowContainerTitle}>{'Name :'}</Text>
								<Text style={styles.titleTxt}>{name}</Text>
								
							</View>
							<View style={styles.rowContainerInner}>
								<Text style={styles.rowContainerTitle}>{'Amount  :'}</Text>
								<Text style={styles.titleTxt}>{salary}</Text>
							</View>



						</View>
						{/* <View style={styles.rowContainer}>
							<View style={styles.rowContainerInner}>
								<Text style={styles.rowContainerTitle}>{'Designation :'}</Text>
								<Text style={styles.titleTxt}>{designation}</Text>
							</View>
							{status && (
							<View style={styles.rowContainerInner}>
								<Text style={styles.rowContainerTitle}>{'status :'}</Text>
								<Text style={styles.titleTxt}>{status}</Text>
							</View>
							)}
						</View> */}



					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default NotificationCard;
