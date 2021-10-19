import React from 'react';
import { View, Text } from 'react-native';
import * as resources from 'resources';
import styles from './EmptyRecordStyle';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const EmptyRecord = ({ value, style, textStyle,  ...props }) => (
	            <View style={[styles.noRecordContainer,style]}>
					<Text style={[styles.noRecordTxt,textStyle]}>No record found</Text>
				  </View>
);

export default EmptyRecord;
