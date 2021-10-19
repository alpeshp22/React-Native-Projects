import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as resources from 'resources';
import styles from './StickButtonStyle';
import Icon from "react-native-vector-icons/Feather";



const StickButton = ({ value, onPress, style, iconStyle, size = 22, ...props }) => (
	<TouchableOpacity style={[ styles.plusButton, style ]} onPress={onPress} {...props}>
			<View style={styles.plusButtonView}>
		<Icon name="plus" style={[styles.iconStyle,iconStyle]} />
		</View>
	</TouchableOpacity>
);

export default StickButton;
