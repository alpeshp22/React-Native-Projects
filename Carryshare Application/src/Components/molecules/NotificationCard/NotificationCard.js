import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './NotificationCardStyles';
import { connect } from "react-redux";
import { color } from "../../../Constants/Color";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


export const NotificationCard = (props) => {

const { dateTime, imageLeft,isRead, title,imgStyle, description,containerStyle} = props;
	return (
		<TouchableOpacity onPress={() => props.onPress()}activeOpacity={1}
			style={[styles.mainContainer, containerStyle]}>
				<View style={styles.listRow}>
					{imageLeft&&
				<View style={[styles.imageContainer,]}>
						<Image source={imageLeft} style={[styles.userImg,imgStyle]}/>
					</View>}
					<View style={styles.assignListContainer} >
						<View style={styles.issueListContainer} onPress={() => { }}>
						{title&&<Text style={styles.titleTxt}>{title}</Text>}
							<Text style={styles.description}>{description}</Text>
							<Text style={styles.dateLable}>{dateTime}</Text>
						</View>
						<View style={styles.iconView}>
						{isRead === 0 && <View style={styles.activeDot}></View>}
							<Icon name="chevron-right" style={styles.iconStyle}/>
						</View>
					</View>
				</View>
			
		</TouchableOpacity>
	);

}





export default NotificationCard;
