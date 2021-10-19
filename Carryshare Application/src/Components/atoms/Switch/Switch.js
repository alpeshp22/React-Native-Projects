import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import * as resources from 'resources';

const Switch = ({ value, onPress, style, textStyle, size = 50, ...props }) => (
	<TouchableOpacity style={[ styles.checkBox, style ]} onPress={onPress} {...props}>
		<Image style={{ width: 50, height: 25, resizeMode:'contain' }} source={value ? resources.ON : resources.OFF} />
	</TouchableOpacity>
);

export default Switch;
