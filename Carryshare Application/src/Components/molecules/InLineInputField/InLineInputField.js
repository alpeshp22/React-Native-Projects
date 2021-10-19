import React from 'react';
import { View, Text } from 'react-native';
import styles from './InLineInputFieldStyle';
import * as Atoms from '../../atoms';
import Icon from 'react-native-vector-icons/Entypo';


export const InLineInputField = (props) => {
	const [isVisible, setIsVisible] = React.useState(false);
	const [icon, setIcon] = React.useState('eye-with-line');

	const {
		title, mainContainerStyle, inputContainerStyle,titleStyle, value, textFieldStyle, placeholder, onChangeText, keyboardType, readOnly, onFocus, onRef, secureTextEntry, error, onBlur, disable, length,
	} = props;
	
	
	return (
		<View style={[styles.editProfileInner,mainContainerStyle]}>
						<Text style={[styles.editProfileText,titleStyle]}>{title}</Text>
			<Atoms.TextInput 
				textFieldStyle={[styles.inputContainer, textFieldStyle]}
				placeholder={placeholder} value={value}
				onChangeText={(text) => onChangeText(text)}
				onFocus={() => { if (onFocus !== undefined) { onFocus(); } }}
				onBlur={() => { if (onBlur !== undefined) { onBlur(); } }}
				length={length}
				error={error}
				secureTextEntry={isVisible?true:false}
				onRef={onRef}
				editable={readOnly ? false : true}
				keyboardType={keyboardType}
				disable={disable}
			/>
			</View>
			
	);

}





export default InLineInputField;
