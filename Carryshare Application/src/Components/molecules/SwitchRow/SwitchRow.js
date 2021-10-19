import React from 'react';
import { Image, View, TouchableOpacity, Text } from 'react-native';
import styles from './SwitchRowStyles';
import { connect } from "react-redux";
import { color } from "../../../Constants/Color";
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import * as Atoms from '../../atoms'


export const SwitchRow = (props) => {

const { onClick,value, title,containerStyle} = props;
	return (
		<View style={[styles.mainContainer,containerStyle]}>
					<Text style={styles.titleTxt}> {title}</Text>
					<Atoms.Switch value={value} onPress={() => onClick(!value)} />

				</View>
	);

}





export default SwitchRow;
