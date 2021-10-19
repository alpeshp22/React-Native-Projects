import React from 'react';
import { TouchableOpacity, View,Text } from 'react-native';
import styles from './ButtonStyle';



const Button = ({ title, onPress, style, textStyle,bottom, ...props }) => (
<View style={styles.submitBtnContainer}>
<TouchableOpacity onPress={onPress} {...props}style={[,bottom?styles.bottomBtn:styles.container,style]} >

		<Text style={[styles.btnText,textStyle]}>{title}</Text>

</TouchableOpacity>
</View>	
);

export default Button;
