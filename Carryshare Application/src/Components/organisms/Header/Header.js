import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StatusBar } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import styles from "./HeaderStyle";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as resources from 'resources';
import { theme } from '../../../Constants/Theme';
const Header =(props)=>  {
	
	const {title,isTab, containerStyle, iconLeftStyle,titleStyle,headeBackIcon, iconRightStyle,iconStyle, BellIconStyle, _onRightAction, _onLeftAction,_onCenterAction,isHome,rightIconName} = props;
	
if(isHome){
	return (
			<View style={[styles.headerContainer,containerStyle ]} >
			<StatusBar backgroundColor={theme.Status_Bar} barStyle={'light-content'} translucent={false} />
			<View style={[styles.header,iconLeftStyle]}> 
					{/* <TouchableOpacity style={[styles.headerHome,iconLeftStyle]} onPress={()=> {_onLeftAction()}}>
						<Icon name='arror-left' style={styles.headerHomeIcon} />
					</TouchableOpacity> */}
					 <Text style={[styles.HeaderHomeText,titleStyle]}>{title}</Text>
				</View>
				<View style={styles.headerLogoContainer}>
				{/* <View style={styles.headerLogo}>
						<Image source={resources.HEADER_ICON} style={styles.HeaderLogoImg}  resizeMode={'cover'}/>
					</View> */}
				</View>
				<View style={styles.headerRight}>
					<TouchableOpacity style={[styles.headerNotificationContainer,BellIconStyle]} onPress={()=>{_onCenterAction()}}>
						<Icon name='bell' style={styles.headerNotificationIcon}/>
					</TouchableOpacity>
					{/* <TouchableOpacity style={[styles.headerUserImgContainer,iconRightStyle]} onPress={()=>{_onRightAction()}}>
						<Image source={resources.USER_ICON} style={styles.headerUserImg}  resizeMode={'contain'}/>
					</TouchableOpacity> */}
				</View>
			</View>
	);
}
else{
	return (
		<View style={[styles.headerContainer,containerStyle ]} >
		<StatusBar backgroundColor={theme.Status_Bar} barStyle={'light-content'} translucent={false} />
			<View style={styles.headerLeft2}>
				<View style={[styles.header,iconLeftStyle]}> 
				{!isTab &&
				<TouchableOpacity  onPress={()=> {_onLeftAction()}}>
					<Icon name='arrow-left' style={[styles.headerHomeIcon,headeBackIcon]} />
				   </TouchableOpacity>}
				   <Text style={[styles.HeaderHomeText,titleStyle]}>{title}</Text>
				</View>
				
			</View>
			
			<View style={[styles.headerRight2]}>
				{rightIconName &&
				<TouchableOpacity style={[styles.headerUserImgContainer,iconRightStyle]} onPress={()=>{_onRightAction()}}>
				<Icon name={rightIconName} style={[styles.headerNotificationIcon,iconStyle]} />
				</TouchableOpacity>
					}
			</View>
		</View>
);

}
}

export default Header;

