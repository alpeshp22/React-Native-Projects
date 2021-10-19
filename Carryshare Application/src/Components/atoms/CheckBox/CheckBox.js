import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as resources from 'resources';
import styles from './CheckBoxStyle';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const CheckBox = ({ value, onPress, style, textStyle,color="green",unCheckedIconStyle,checkedIconStyle, size = 22,type, ...props }) => (
	<TouchableOpacity style={[ styles.checkBox, style ]} onPress={onPress} {...props}>
		{value=== true&&<Icon name='checkbox-marked-outline' style={[styles.checkedIcon,checkedIconStyle]}/>}
		{value===false&&<Icon name='checkbox-blank-outline'  style={[styles.toDoListBulletIcon,unCheckedIconStyle]}/>}
	</TouchableOpacity>
);

export default CheckBox;
