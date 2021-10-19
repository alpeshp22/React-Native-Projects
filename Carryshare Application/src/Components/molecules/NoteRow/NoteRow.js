import React from 'react';
import { Image, View, TextInput, Text } from 'react-native';
import styles from './NoteRowStyles';
import { connect } from "react-redux";
import { color } from "../../../Constants/Color";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Atoms from '../../atoms';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";


export const NoteRow = (props) => {
	// const [checked, setChecked] = React.useState(false);
	// const [textValue, setTextValue] = React.useState('');

	const {
		value,
		textFieldStyle,
		onChangeText,
		keyboardType,
		editable,
		checkBoxValue,
		onPress,
		disable,
		textValue
	} = props;
	return (
		<View  style={styles.toDoListContent}>
				{/* <View style={styles.toDoListBulletIconContainer}>
				<Icon2 name='rhombus-medium' style={styles.toDoListBulletIcon}/>
				</View> */}
				<View style={styles.toDoListDescriptionContainer}>
					{value?
				<Text numberOfLines={2} style={styles.slectedText}>{textValue}</Text>
				:<Text numberOfLines={2} style={styles.notSlectedText}>{textValue}</Text>}
				</View>
				<View style={styles.toDoListCheckContainer}>
					<Atoms.CheckBox value={value}  onPress={() =>onPress()} />
				</View>
		</View>
	);

}





export default NoteRow;
