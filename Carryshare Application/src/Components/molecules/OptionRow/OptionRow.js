import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './OptionRowStyles';
import { connect } from "react-redux";
import { color } from "../../../Constants/Color";
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';


export const NotificationCard = (props) => {

const { dateTime, imageLeft,isRead, title,imgStyle, description,containerStyle} = props;
	return (
		<TouchableOpacity onPress={() => props.onPress()} disabled={props.disabled}
				style={[styles.mainContainer, props.containerStyle]}>
					<View style={styles.subContainer}>
						{props.leftIcon &&
							<View style={[styles.iconColLeft, props.iconColLeft, ]}>
								<Icon name={props.leftIcon} size={25} color='#ccc' style={props.iconStyle} />
							</View>
						}
						{props.leftIcon2 &&
							<View style={[styles.iconColLeft, props.iconColLeft, ]}>
								<Icon2 name={props.leftIcon2} size={25} color='#ccc' style={props.iconStyle} />
							</View>
						}
						<View style={[styles.txtCol, (props.leftIcon?'': styles.leftMargin)]}>
							<Text style={[styles.titleTxt, props.titleStyle]}>{props.title}</Text>
						</View>
						<View style={[styles.iconColRight, props.rightIconCol]}>
							{props.rightIcon ?
							<Icon name={props.rightIcon} size={25} color='#ccc' style={props.rightIconStyle} /> :
							<Icon name={'chevron-right'} size={30} color='#ccc' style={props.rightIconStyle} />}
						</View>
					</View>
			</TouchableOpacity>
	);

}





export default NotificationCard;
